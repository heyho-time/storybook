
// Task.js와 커플. 필요한 만큼 구성 요소당 스토리를 가질 수 있다.


import React from 'react';

import Task from './Task';

export default {
    component: Task,
    title: 'Task', // Storybook 앱의 사이드바에 있는 컴포넌트를 참조하는 방법
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};