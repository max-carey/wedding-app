import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import rama from '@/public/rama.png';   


const Recommendations = () => {
    const t = useTranslations('IndexPage');

    return (
        <section id="recommendations" className="container-full section-styles">
            <Image
                src={rama}
                width={80}
                height={0}
                alt="Rama"
                className="h-auto object-contain mb-[14px]"
            />
            <div className="content-section flex flex-col items-center justify-start gap-8 pt-8">
                <h2 className="font-tanpearl text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center mb-8">
                    {t('sections.recommendations.title')}
                </h2>
            </div>

            <div className="text-content flex flex-col gap-6 max-w-3xl text-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">{t('sections.recommendations.restaurants')}</h3>
                        <ul className="space-y-2">
                            <li>• <a href="https://www.instagram.com/havre77/" target="_blank" rel="noopener noreferrer">Havre 77</a></li>
                            <li>• <a href="https://www.instagram.com/tavernaenprim/" target="_blank" rel="noopener noreferrer">Taverna</a></li>
                            <li>• <a href="https://www.instagram.com/_supplipastificio/" target="_blank" rel="noopener noreferrer">Suppli</a></li>
                            <li>• <a href="https://www.instagram.com/maximobistrot/" target="_blank" rel="noopener noreferrer">Maximo Bistrot</a></li>
                            <li>• <a href="https://www.instagram.com/caracoldemarcdmx/" target="_blank" rel="noopener noreferrer">Caracol de Mar</a></li>
                            <li>• <a href="https://www.instagram.com/botanicomx/" target="_blank" rel="noopener noreferrer">Botánico </a></li>
                            <li>• <a href="https://www.instagram.com/masalaymaiz/" target="_blank" rel="noopener noreferrer">Masala y MaÍz</a></li>
                            <li>• <a href="https://www.instagram.com/ultramarinos.rest/" target="_blank" rel="noopener noreferrer">Ultramarinos Demar</a></li>
                            <li>• <a href="https://www.instagram.com/martinez.rest/" target="_blank" rel="noopener noreferrer">Martinez</a></li>
                            <li>• <a href="https://www.instagram.com/em.rest/" target="_blank" rel="noopener noreferrer">Em</a></li>
                            <li>• <a href="https://www.instagram.com/santohandrollbar/" target="_blank" rel="noopener noreferrer">Santo</a></li>
                            <li>• <a href="https://www.instagram.com/deigoramen/" target="_blank" rel="noopener noreferrer">Deigo Ramen</a></li>
                            <li>• <a href="https://www.instagram.com/el.tigre.silencioso/" target="_blank" rel="noopener noreferrer">El tigre silencioso</a></li>
                            <li>• <a href="https://www.instagram.com/restauranterosetta/" target="_blank" rel="noopener noreferrer">Rosetta</a></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">{t('sections.recommendations.coffeeShops')}</h3>
                        <ul className="space-y-2">
                            <li>• <a href="https://www.instagram.com/arabica.mexico/" target="_blank" rel="noopener noreferrer">% Arabica Café </a></li>
                            <li>• <a href="https://www.instagram.com/odette_________/" target="_blank" rel="noopener noreferrer">Odette</a></li>
                            <li>• <a href="https://www.instagram.com/panaderiarosetta/" target="_blank" rel="noopener noreferrer">Panadería Rosetta </a></li>
                            <li>• <a href="https://www.instagram.com/greenrhino_mx/" target="_blank" rel="noopener noreferrer">Green Rhino </a></li>
                            <li>• <a href="https://www.instagram.com/kiyo.cafe/" target="_blank" rel="noopener noreferrer">Kiyo Café </a></li>
                            <li>• <a href="https://www.instagram.com/bunamx/" target="_blank" rel="noopener noreferrer">Buna</a></li>
                            <li>• <a href="https://www.instagram.com/cafe.denadie/" target="_blank" rel="noopener noreferrer">Café de nadie </a></li>
                            <li>• <a href="https://www.instagram.com/mendlmx/" target="_blank" rel="noopener noreferrer">Mendl </a></li>
                            <li>• <a href="https://www.instagram.com/cafe_nin/" target="_blank" rel="noopener noreferrer">Café Nin</a></li>
                            <li>• <a href="https://www.instagram.com/sede.cafe/" target="_blank" rel="noopener noreferrer">Sede Café</a></li>
                            <li>• <a href="https://www.instagram.com/_niddo/" target="_blank" rel="noopener noreferrer">Niddo</a></li>
                            <li>• <a href="https://www.instagram.com/farmacia.internacional/" target="_blank" rel="noopener noreferrer">Farmacia Internacional </a></li>
                            <li>• <a href="https://www.instagram.com/el.minutito/" target="_blank" rel="noopener noreferrer">El minutito</a></li>
                            <li>• <a href="https://www.instagram.com/bou_mx_/" target="_blank" rel="noopener noreferrer">Bou</a></li>
                            <li>• <a href="https://www.instagram.com/churreriaelmoro/" target="_blank" rel="noopener noreferrer">El Moro</a></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">{t('sections.recommendations.tacos')}</h3>
                        <ul className="space-y-2">
                            <li>• <a href="https://www.instagram.com/carinito.tacos/" target="_blank" rel="noopener noreferrer">Cariñito Tacos</a></li>
                            <li>• <a href="https://www.instagram.com/ladyboy.mx/" target="_blank" rel="noopener noreferrer">LadyBoy </a></li>
                            <li>• <a href="https://www.instagram.com/elremolkito/" target="_blank" rel="noopener noreferrer">El remolkito</a></li>
                            <li>• <a href="https://www.instagram.com/tacoslosalexis/" target="_blank" rel="noopener noreferrer">Tacos Los Alexis </a></li>
                            <li>• <a href="https://www.instagram.com/maizajos/" target="_blank" rel="noopener noreferrer">Maizajo</a></li>
                            <li>• <a href="https://www.instagram.com/la.ochenta.y.nueve/" target="_blank" rel="noopener noreferrer"></a>La Ochenta y nueve </li>
                            <li>• <a href="https://www.instagram.com/molinopujol/" target="_blank" rel="noopener noreferrer">Molino Pujol </a></li>
                            <li>• <a href="https://www.instagram.com/exp_maiz/" target="_blank" rel="noopener noreferrer">Expendio de maiz </a></li>
                            <li>• <a href="https://www.instagram.com/micompachava/" target="_blank" rel="noopener noreferrer">Mi compa chava</a></li>
                        </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">{t('sections.recommendations.galleries')}</h3>
                        <ul className="space-y-2">
                            <li>• <a href="https://www.instagram.com/galeriaomr/" target="_blank" rel="noopener noreferrer">Galeria OMR</a></li>
                            <li>• <a href="https://www.instagram.com/casabosques/" target="_blank" rel="noopener noreferrer">Casa Bosques</a></li>
                            <li>• <a href="https://www.instagram.com/originario.originario/" target="_blank" rel="noopener noreferrer">Originario</a></li>
                            <li>• <a href="https://www.instagram.com/_m.o.o.n.i_/" target="_blank" rel="noopener noreferrer">Mooni Art Gallery </a></li>
                            <li>• <a href="https://www.instagram.com/lagunamx/" target="_blank" rel="noopener noreferrer">Laguna</a></li>
                            <li>• <a href="https://www.instagram.com/cafebreriaelpendulo/" target="_blank" rel="noopener noreferrer">Cafebrería El Péndulo</a></li>
                            <li>• <a href="https://www.instagram.com/mnantropologia/" target="_blank" rel="noopener noreferrer">Museo de Antropología </a></li>
                            <li>• <a href="https://www.instagram.com/museoartemodernomx/" target="_blank" rel="noopener noreferrer">Museo de Arte Moderno</a></li>
                            <li>• <a href="https://www.instagram.com/eneltamayo/" target="_blank" rel="noopener noreferrer">Museo Tamayo</a></li>
                            <li>• <a href="https://www.instagram.com/casacarrington.uam/" target="_blank" rel="noopener noreferrer">Casa Estudio Leonora Carrington</a></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">{t('sections.recommendations.bars')}</h3>
                        <ul className="space-y-2">
                            <li>• <a href="https://www.instagram.com/fiftymils/" target="_blank" rel="noopener noreferrer">Fifty mils</a></li>
                            <li>• <a href="https://www.instagram.com/salon_palomilla/" target="_blank" rel="noopener noreferrer">Salón Palomilla</a></li>
                            <li>• <a href="https://www.instagram.com/tlecan/" target="_blank" rel="noopener noreferrer">Tlecan </a></li>
                            <li>• <a href="https://www.instagram.com/shhh99r/" target="_blank" rel="noopener noreferrer">Shhh </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendations;
