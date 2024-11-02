import Header from "../utilities/Header";

const Home = () => {
    return (
        <div className="font-inter bg-[url('/src/assets/image/homebg.png')] bg-no-repeat w-full flex justify-center items-center bg-cover bg-center h-screen">
            <Header />
            <div className="flex flex-col gap-10 justify-center items-center">
                <p className="sm:text-2xl font-semibold text-center lg:text-5xl md:text-3xl text-white">Where Every Bite Feels Like Home.</p>
                <p className="uppercase text-[10px] tracking-[.5em] text-white/50">uncle wu <span className="text-ly">delights!</span></p>
            </div>
        </div>
    );
}

export default Home