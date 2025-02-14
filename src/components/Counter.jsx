import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-row gap-5 items-center justify-center h-screen w-1/2 mx-auto  text-2xl bg-gray-200">
            <button className="px-3 py-5 bg-orange-500" onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{count}</h1>
            <button className="px-3 py-5 bg-yellow-500" onClick={() => setCount(count - 1)}>Decrement</button>
            {/* s */}

        </div>
    );
};

export default Counter;