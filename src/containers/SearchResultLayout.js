import React from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

export default class SearchResultLayout extends React.Component {

    render() {

        const results = [
            {
                name: 'Apple iPhone 8 Plus 64GB Unlocked GSM/CDMA Phone w/ 12MP Camera - Silver',
                msrp: 939.99,
                salePrice: 939.95,
                upc: '766970281213',
                shortDescription: "iPhone 8 Plus introduces an all‑new glass design. The world's most popular camera now even better. The smartest, most powerful chip ever in a smartphone. Wireless charging that&rsquo;s truly effortless. And augmented reality experiences never before possible. iPhone 8 Plus. A new generation of iPhone.",
                image: "https://i5.walmartimages.com/asr/1f387a62-c484-4261-aaf4-8573fe0f6db3_1.89032fa9398fda64d0f7f504685367e5.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
            },
            {
                name: 'Apple iPhone 7 32GB Verizon, Refurbished  - Black',
                msrp: 399.99,
                salePrice: 399.99,
                upc: '766970281213',
                shortDescription: "iPhone 8 Plus introduces an all‑new glass design. The world's most popular camera now even better. The smartest, most powerful chip ever in a smartphone. Wireless charging that&rsquo;s truly effortless. And augmented reality experiences never before possible. iPhone 8 Plus. A new generation of iPhone.",
                image: "https://i5.walmartimages.com/asr/4fecaf31-8d6c-49ce-8e78-41d8340a3a29_1.addf3aca4d5777b7399d11e3ae835ae9.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",

            }
        ]

        const CardComponents = results.map((item, index) => (
            <Card
                name={item.name}
                salePrice={item.salePrice}
                shortDescription={item.shortDescription}
                image={item.image}
                key={index}
            />
        ));

        return (
            <div>
                <div className="container banner">
                    <SearchBar />
                </div>
                <div>
                    <div className="row cards">
                        {CardComponents} />
                        </div>
                </div>
            </div>

        )
    }
}