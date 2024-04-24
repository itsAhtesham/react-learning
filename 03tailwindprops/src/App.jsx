import Card from './components/Cards'
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-pretty mb-4' >Tailwind CSS</h1>
      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1712705155129-0470455233c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
      
      <Card username="chaiaurcode"/>
      <Card username="chaiAurReact"/>

    </>
  )
}

export default App
