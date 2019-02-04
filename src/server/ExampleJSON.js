const exampleJSON = {
    FormID: 123456,
    FormName: 'Test Form',
    Owner: 987654,
    Tasks: [
        {
            TaskName: 'Task 1',
            TaskType: 'yesNo',
            TaskOptions: null,
            TaskData: null
        },
        {
            TaskName: 'Task 2',
            TaskType: 'textBox',
            TaskOptions: null,
            TaskData: null
        },
        {
            TaskName: 'Task 3',
            TaskType: 'increment',
            TaskOptions: null,
            TaskData: null
        },
        {
            TaskName: 'Task 4',
            TaskType: 'timer',
            TaskOptions: null,
            TaskData: null
        },
        {
            TaskName: 'Task 5',
            TaskType: 'dropdown',
            TaskOptions: ['option 1', 'option 2', 'option 3', 'option 4'],
            TaskData: null
        },
        {
            TaskName: 'Task 6',
            TaskType: 'submitReset',
            TaskOptions: null,
            TaskData: null
        }
    ]
};

module.exports.testJSON = exampleJSON;
