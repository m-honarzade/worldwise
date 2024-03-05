import PageNav from "../components/PageNav";

const Product = () => {
  return (
    <main className="bg-[#2d3439] flex flex-col h-screen">
      <PageNav />
      <section className="flex flex-row p-10  justify-around">
        <div className="w-[50%] flex justify-center ">
          <img
            src="../../public/images/img-1.jpg"
            alt="a man with a dog in the nature"
            className="w-[70%]"
          />
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center gap-10 ">
          <h2 className="text-nowrap text-[#ececec] font-bold text-3xl lg:text-5xl  leading-tight lg:leading-snug w-[60%] md:[w-75%]">
            About WorldWide.
          </h2>
          <p className="w-[60%] md:[w-75%] text-[#ececec]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vitae vel labore mollitia iusto.
          </p>
          <p className="w-[60%] md:[w-75%] text-[#ececec]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
