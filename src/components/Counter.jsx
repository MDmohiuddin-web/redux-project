import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/featches/counter/CounterSlice";

const Counter = () => {
    const count = useSelector(state => state.Counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-row gap-5 items-center justify-center h-screen w-1/2 mx-auto  text-2xl bg-gray-200">
            <button className="px-3 py-5 bg-yellow-500" onClick={() => dispatch(decrement())}>Decrement -</button>
            <h1>{count}</h1>
            <button className="px-3 py-5 bg-orange-500" onClick={() => dispatch(increment())}>Increment +</button>




        </div>
    );
};

export default Counter;
