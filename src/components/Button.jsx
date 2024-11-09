export default function Button(props) {
  const { children, text } = props

  return (
    <button className="group flex items-center justify-center bg-zinc-700 rounded-3xl size-16  duration-200 hover:rounded-xl hover:bg-emerald-500 hover:text-zinc-200">
      {children}

      <span class="absolute w-auto p-2 m-2 min-w-max left-20 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold duration-100 scale-0 origin-left group-hover:scale-100 capitalize">
        {text}
      </span>
    </button>
  )
}
