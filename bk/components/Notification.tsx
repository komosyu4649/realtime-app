import { FC } from 'react'
import { useQueryNotices } from '../hooks/useQueryNotices'
import { useSubscribeNotices } from '../hooks/useSubscribeNotices'
import { NoticeItem } from './NoticeItem'
import { NoticeForm } from './NoticeForm'

export const Notification: FC = () => {
  const { data: notices } = useQueryNotices()
  console.log(notices)
  useSubscribeNotices()
  return (
    <>
      <p className="mb-4 text-center">notification</p>
      <NoticeForm />
      <ul className="my-5" data-ul-notice>
        {notices.map((notice) => (
          <NoticeItem
            key={notice.id}
            id={notice.id}
            content={notice.content}
            user_id={notice.user_id}
          />
        ))}
      </ul>
    </>
  )
}
