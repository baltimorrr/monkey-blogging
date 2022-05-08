import React from "react";
import Button from "../../button/Button";

const HomeBanner = () => {
    return (
        <div className="min-h-[520px] bg-gradient-to-br from-primary to-secondary py-10 px-0">
            <div className="container-main">
                <div className="banner flex justify-between items-center">
                    <div className="banner-content max-w-[600px] text-white">
                        <h1 className="text-[36px] mb-5">Monkey Blogging</h1>
                        <p className="leading-7 mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus fuga at voluptatum sunt, ea, ipsum
                            obcaecati eveniet deleniti dolorum ut illo fugit
                            vero perferendis harum earum vel id libero dolor!
                        </p>
                        <Button height='55' kind="secondary" to="/sign-up">Get started</Button>
                    </div>
                    <div className="banner-image">
                        <img src="image-banner.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
