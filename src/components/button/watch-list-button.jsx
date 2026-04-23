import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions/listActions";

const WatchListButton = ({ movie }) => {
  //izleme listesi verisini reducer'dan al
  const { list } = useSelector((store) => store.listReducer);
  const dispatch = useDispatch();

  //ekrana basılan film izleme listesinde var mı?
  const isAdded = list.find((item) => item.id === movie.id);

  const handleClick = () => {
    dispatch(toggleWatchList(movie, !isAdded));
  };

  return (
    <button
      onClick={handleClick}
      className="hero-btn bg-blue-600 cursor-pointer"
    >
      {!isAdded ? (
        <>
          <Plus className="size-5" />
          Listeye Ekle
        </>
      ) : (
        <>
          <Minus className="size-5" />
          Listeden Kaldır
        </>
      )}
    </button>
  );
};

export default WatchListButton;
