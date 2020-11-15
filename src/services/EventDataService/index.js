const dummyEventData = [
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event 10",
    description: "Event description 10",
    type: "Reminder",
  },
  {
    date: "11:11:11 11/11/11",
    title: "Storybook Event 9",
    description: "Event description 9",
    type: "Reminder",
  },
  {
    date: "10:10:10 10/10/10",
    title: "Storybook Event 8",
    description: "Event description 8",
    type: "Reminder",
  },
  {
    date: "09:09:09 08/09/09",
    title: "Storybook Event 7",
    description: "Event description 7",
    type: "Reminder",
  },
  {
    date: "08:08:08 08/09/08",
    title: "Storybook Event 6",
    description: "Event description 6",
    type: "Reminder",
  },
  {
    date: "07:07:07 07/07/07",
    title: "Storybook Event 5",
    type: "Reminder",
  },
  {
    date: "06:06:06 06/06/06",
    title: "Storybook Event 4",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event 3",
    description: "Event description 3",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event 2",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event 1",
    type: "Reminder",
  },
];

export const fetchEventData = () => Promise.resolve(dummyEventData);

export const addEvent = (eventData) => {
  dummyEventData.push(eventData);
  return Promise.resolve(true);
};
