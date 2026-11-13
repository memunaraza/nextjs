import Card from "./components/Card"

const Home = () => {
  return (
    <div className="p-4 bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 min-h-screen">
      <div className="flex flex-wrap justify-center">
        <Card title="Card" content="this is a cards one "/>
        <Card title="Card" content="this is a cards one "/>
        <Card title="Card" content="this is a cards one "/>
        <Card title="Card" content="this is a cards one "/>
        <Card title="Card" content="this is a cards one "/>
      </div>
    </div>
  )
}

export default Home
