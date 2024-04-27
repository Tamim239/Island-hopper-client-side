export const AllTouristsSport = () => {
  return (
    <div>
      <div className="text-center btn-primary">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>ascending </a>
            </li>
            <li>
              <a>descending </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img
          src="https://source.unsplash.com/640x480/?3"
          alt=""
          className="h-80 dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <span className="text-xs uppercase dark:text-gray-600">
            Join, it is free
          </span>
          <h3 className="text-3xl font-bold">
            We are not reinventing the wheel
          </h3>
          <p className="my-6 dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aliquam possimus quas, error esse quos.
          </p>
          <button type="button" className="self-start">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};
