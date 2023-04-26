import { useDispatch } from 'react-redux';
import { handlePost } from '../features/counterSlice';

const Card = ({ data, setSelectedCard, Cards, setCads }) => {

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="movie"
        onClick={() => {
          setSelectedCard(data)
          dispatch(handlePost(data));
          }}
      >
        <p>Title : {data.title}</p>
        <button
          onClick={() => {

            setCads([{
              ...data,
              isFav: !data.isFav,
            },
            ...Cards
            ])

          }}
        >
          {data.isFav ? "Already Liked" : "Wanna Like"}
        </button>
      </div>
    </>
  )
}

export default Card
