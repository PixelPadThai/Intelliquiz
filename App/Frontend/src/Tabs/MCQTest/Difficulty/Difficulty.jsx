function Difficulty({ TriggerQuiz, setId }) {
  return (
    <div className="text-white border bg-custom-gray border-gray-500 mt-20 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg px-4 sm:px-10 p-8 fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="w-full text-3xl sm:text-4xl md:text-6xl font-bold text-center">
          Choose Difficulty
        </h1>
        <div className="flex flex-col items-center w-full gap-5 mt-10">
          <button
            onClick={() => {
              TriggerQuiz();
              setId(1);
            }}
            className="font-raleway rounded-md w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 bg-green-400 py-2 sm:py-4 text-lg sm:text-3xl hover:bg-green-300"
          >
            Easy
          </button>
          <button
            onClick={() => {
              TriggerQuiz();
              setId(2);
            }}
            className="font-raleway rounded-md w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 bg-yellow-500 py-2 sm:py-4 text-lg sm:text-3xl hover:bg-yellow-400"
          >
            Medium
          </button>
          <button
            onClick={() => {
              TriggerQuiz();
              setId(3);
            }}
            className="font-raleway rounded-md w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 bg-red-600 py-2 sm:py-4 text-lg sm:text-3xl hover:bg-red-500"
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Difficulty;
