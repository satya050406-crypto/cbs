
import React from 'react';

const Team = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <span className="text-corporate-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Experts</span>
                        <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                            The team behind the <span className="italic text-corporate-primary dark:text-corporate-secondary">cutting-edge</span> project
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed border-l-4 border-corporate-secondary pl-6">
                            Our team at Nangia & Co LLP is a blend of seasoned professionals and innovative thinkers. With diverse expertise and a commitment to excellence, we work collaboratively to deliver tailored solutions.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { name: "Rakesh Nangia", role: "Founder & Managing Partner", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcMrFzvcHJ1ATCB5TGe91ESAYaWuXvgRHy6S8t9RLSBokNr6dkIwVrJQFfVFE67kYPiPiGz81JPOAmUcYX4ulsjUo0VGBgG5c0qjkxJdJ_c71ZaTc5DDQk0Si3QOfafBMxaN9RP4HJQ4xHIk9ptk_mepaNZqwhvnbOwI4I_846i96_lDnpT20oG-JDWsjILkVotgV9c7IgNIyjZci_IQpRqyPu2ITOIGTB1EhDMbtwrllXOzRo7m6BC-sIycdlLMSHSo-DKHmgvUO0" },
                        { name: "Chirag Nangia", role: "Partner", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJKt_FbedbCVHrxWSy-a3ZIESndACW6t_hOO6-hZCAr-vcfv6ZZ_jnjaI7aZ5dGOq8vCXmVrWGrUqRhSzCWHv6D8uA-ykDkANrH65m54fw_m8wUl3WSbm6lb18sO7rvVdcvtS9guiM_BfjLNCUH_LqR3ta6sPogdRyuNC4BM-PoDGc1nijGxhve9IFRzC5vlzdspLWEzbwazmuItzMEKhj6JX2Vnd4mS3yum8C1Qb8LL-zvI4KWXzaaCOk2O6337TY0O8QqktzkoCg" },
                        { name: "Vikas Gupta", role: "Partner", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhL7DIBKzDrqiJHegTvg-MX0xci5sGseyaufqPX5HDYovcxSRF87FDUPDuha9KWyzARcLudJsLoMG1Z0yg-2mnV06aBT151TLXKr1jX0yyYwiJ7DFWqGbbkFN3DiDXJlT-ahSlGYT2IwJXHlONENryJFvPqiOqzMvBEx3rWBBkMRhkC5Z5vTJxsV6dAIG0LHOeTivQL7grkgb9_QQ2bmQ8CZtuVCnnEOTpHlilt51qNRWg4qUTEax9ikki0OUv4roXoCnD5g-f9Tmc" },
                        { name: "Neeraj Agrawala", role: "Partner", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzGncX__aseb2yGCaeMBiBKOIVqimSZiqqZA9-4THTVRwvHvwyBwa5r4emf6a3C90ohNcoIh8QCAzxyopUXTpauTx-o99rq4aArMTlzQzgbe4awGDf3Wt_BpfWW_2Trs-5nN87gQTT7rruy3VGOaVeFUfwzZoyMolQJ-q3m1QGniS1MRRbMGP-Qlczbgjxsy-S8P3GEs_uSypILPNmSH-Q6d-AxOJyU-AVvWf5Id6ob9TisCmgw7mxNnR57Szv_PhOEd1X71qSLy8W" }
                    ].map((member, index) => (
                        <div key={index} className="group text-center">
                            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5] mx-auto w-full max-w-[240px]">
                                <img
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                    src={member.img}
                                />
                            </div>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{member.role}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="#" className="inline-block px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-bold text-gray-900 dark:text-white hover:bg-corporate-primary hover:text-white hover:border-corporate-primary dark:hover:bg-white dark:hover:text-corporate-primary transition-all duration-300">
                        View All Partners <span className="material-icons text-sm ml-1 align-middle">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Team;
