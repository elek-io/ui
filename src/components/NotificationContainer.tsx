import { cva, type VariantProps } from 'class-variance-authority';
import { Notification, type NotificationProps } from './Notification.tsx';

const styles = cva('');

export interface NotificationContainerProps
  extends VariantProps<typeof styles> {
  notifications: NotificationProps[];
}

export function NotificationContainer(props: NotificationContainerProps) {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 pt-4 pb-20 lg:pt-20 lg:pb-4 lg:items-start"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {props.notifications.map((notification, notificationIndex) => (
          <Notification
            {...notification}
            key={notificationIndex}
          ></Notification>
        ))}
      </div>
    </div>
  );
}
