import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { supabase } from '../utils/supabase'
import { Notice } from '../types'

export const useSubscribeNotices = () => {
  const queryClient = useQueryClient()
  useEffect(() => {
    const subsc = supabase
      .from('notices')
      .on('INSERT', (payload: SupabaseRealtimePayload<Notice>) => {
        let previousNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (!previousNotices) {
          previousNotices = []
        }
      })
      .on('UPDATE', (payload: SupabaseRealtimePayload<Notice>) => {})
      .on('DELETE', (payload: SupabaseRealtimePayload<Notice>) => {})
      .subscribe()
    const removeSubscription = async () => {
      await supabase.removeSubscription(subsc)
    }
    return () => {
      removeSubscription()
    }
  }, [queryClient])
  return {}
}
