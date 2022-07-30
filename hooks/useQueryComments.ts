import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { Comment } from '../types'

export const useQueryComments = (postId: string) => {
  const getComments = async () => {
    const { data, error } = await supabase
      .from('comment')
      .select('*')
      .eq('post_id', postId)
      .order('created_id', { ascending: true })

    if (error) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Comment[], Error>({
    queryKey: ['comment', postId],
    queryFn: getComments,
    staleTime: Infinity,
  })
}
