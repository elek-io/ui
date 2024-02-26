import type { Meta, StoryObj } from '@storybook/react';
import { type ReactElement } from 'react';
import { Button } from './components-old/Button.tsx';
import { userNavigationExample } from './components-old/Header.tsx';
import { notificationsExample } from './components-old/Notification.tsx';
import { Page, breadcrumbsExample } from './components-old/Page.tsx';
import { sidebarNavigationExample } from './components-old/Sidebar.tsx';
import { BaseLayout } from './layouts-old/BaseLayout.tsx';

const meta: Meta<typeof BaseLayout> = {
  title: 'Client',
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
      <>
        <style>
          {
            'html {background: url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e") no-repeat center center fixed; background-size: cover;} #storybook-root { backdrop-filter: blur(18px); border-radius: 8px; overflow: hidden; }'
          }
        </style>
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
      </>
    );
  },
};
