import CategoryBox from "./CategoryBox";

export default function CategorySection() {
    const categories = [
        { imageSrc: "images/c1.png", title: "Design & Arts" },
        { imageSrc: "images/c2.png", title: "Web Development" },
        { imageSrc: "images/c3.png", title: "SEO Marketing" },
        { imageSrc: "images/c4.png", title: "Video Editing" },
        { imageSrc: "images/c5.png", title: "Logo Design" },
        { imageSrc: "images/c6.png", title: "Game Design" },
    ];
    return (
        <section className="category_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>Category</h2>
                </div>
                <div className="category_container">
                    {categories.map((category, index) => (
                        <CategoryBox
                            key={index}
                            imageSrc={category.imageSrc}
                            title={category.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
