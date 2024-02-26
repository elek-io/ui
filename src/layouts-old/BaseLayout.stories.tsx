import type { Meta, StoryObj } from '@storybook/react';
import { type ReactElement } from 'react';
import { Button } from '../components-old/Button.tsx';
import { userNavigationExample } from '../components-old/Header.tsx';
import { notificationsExample } from '../components-old/Notification.tsx';
import { Page, breadcrumbsExample } from '../components-old/Page.tsx';
import { sidebarNavigationExample } from '../components-old/Sidebar.tsx';
import { BaseLayout } from './BaseLayout.tsx';

const meta: Meta<typeof BaseLayout> = {
  title: 'Layouts/Base',
  component: BaseLayout,
  args: {
    currentPath: '/',
    notifications: notificationsExample,
    sidebarDisabledOnPaths: [],
    sidebarNavigation: sidebarNavigationExample,
    currentUser: {
      userType: 'local',
      name: 'John Doe',
      email: 'john.doe@example.com',
      locale: {
        id: 'en',
        name: 'English',
      },
    },
    userNavigation: userNavigationExample,
  },
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Template: Story = {
  render: (props) => {
    // const [isAsideOpen, setIsAsideOpen] = useState(true);

    function Description(): ReactElement {
      return <>A text describing the pages content.</>;
    }

    function Actions(): ReactElement {
      return (
        <>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
          <Button>Action 3</Button>
        </>
      );
    }

    return (
      <BaseLayout {...props}>
        <Page
          title="Page title"
          description={<Description></Description>}
          actions={<Actions></Actions>}
          breadcrumbs={breadcrumbsExample}
        >
          <h2>Hello from the Page!</h2>
        </Page>
      </BaseLayout>
    );
  },
};
