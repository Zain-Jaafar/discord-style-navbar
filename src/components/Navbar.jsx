import Button from './Button'

export default function Navbar() {
  return (
    <div className="flex flex-col gap-2 max-w-min bg-zinc-800 min-h-screen p-2 text-emerald-500 text-3xl">
      <Button text={'ghost'}>
        <i className="fa-solid fa-ghost"></i>
      </Button>
      <hr className="border-zinc-600"/>
      <Button text={'add'}>
        <i className="fa-solid fa-plus"></i>
      </Button>
      <Button text={'lightning'}>
        <i className="fa-solid fa-bolt"></i>
      </Button>
      <Button text={'fire'}>
        <i className="fa-solid fa-fire-flame-curved"></i>
      </Button>
      <hr className="border-zinc-600"/>
      <Button text={'settings'}>
        <i className="fa-solid fa-gear"></i>
      </Button>

    </div>
  )
}
