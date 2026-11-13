type CardProps ={
  title:string;
  content: string;
};

const Card = ({title, content} : CardProps) => {
  return (
    <div  className="card bg-gray-600 text-white p-4 rounded-lg shadow-md rounded w-96 m-2">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Card
