import sportImage from '../assets/sport.png'; 

function Header(){
    return(
    <header class="bg-white">
    <nav class="container-flex mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
        <img class="h-20 w-auto" src={sportImage} alt=""/>
      </a>
        </div>

        <div class="lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Demo</a>
        </div>
    </nav>

</header>
)
}

export default Header