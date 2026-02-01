

function BestSeller({ Open }) {
    return (
       <section className={`best-seller ${Open ? "Open" : ""}`}>
        <div className="best-seller-inner">
            <h2>Best Seller</h2>

        </div>
       </section>
    );

}

export default BestSeller;