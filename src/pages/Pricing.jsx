import PageNav from "../components/PageNav";

const Pricing = () => {
  return (
    <main className="bg-[#2d3439] flex flex-col h-screen">
      <PageNav />
      <section className="flex flex-row p-10  justify-around">
        <div className="w-[50%] flex flex-col items-center justify-center gap-10 ">
          <h2 className="text-nowrap text-[#ececec] font-bold text-3xl lg:text-5xl  leading-tight lg:leading-snug w-[60%] md:[w-75%]">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="w-[60%] md:[w-75%] text-[#ececec]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vitae vel labore mollitia iusto.
          </p>
        </div>
        <div className="w-[50%] flex justify-center ">
          <img
            src="../../public/images/img-2.jpg"
            alt="view of city"
            className="w-[70%]"
          />
        </div>
      </section>
    </main>
  );
};

export default Pricing;
