const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full relative">
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
