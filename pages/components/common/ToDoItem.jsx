import { Message } from 'semantic-ui-react'

const ToDoItem = ({ todoObject }) => {

  const users = ['Hugo', 'Porter', 'Anthony', 'Martin', 'Lauren', 'Ian', 'Ross', 'Matt', 'George', 'Adam'];

  const { userId, title, completed, id } = todoObject;

  return (
    <Message
      content={title}
      color={completed ? 'green' : 'red'}
      header={users[userId - 1]}
      icon={{
        name: completed ? 'check square outline' : 'square outline',
      }}
    />
  );
}

export default ToDoItem