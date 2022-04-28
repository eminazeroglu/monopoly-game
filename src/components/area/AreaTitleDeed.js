import React from 'react';

function AreaTitleDeed({item}) {
    return (
        <div className="bg-white border border-gray-200">
            {item.type === 'area' && (
                <div className="border-2 border-black">
                    <div className="flex flex-col text-center border-b-2 border-black" style={{backgroundColor: item.bg_color}}>
                        <small style={{color: item.color}}>Kupça</small>
                        <h4 className="font-medium text-lg uppercase" lang={'az'} style={{color: item.color}}>{item.name}</h4>
                    </div>
                    <div className="p-2 text-center space-y-1">
                        <div>
                            <p className="font-medium">Kirayə</p>
                            <p className="font-medium">Boş ərazinin qiyməti {item.empty_area} azn</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <span>1 ev</span>
                                <span>{item.price.one} azn</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>2 ev</span>
                                <span>{item.price.two} azn</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>3 ev</span>
                                <span>{item.price.three} azn</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>4 ev</span>
                                <span>{item.price.four} azn</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Otel</span>
                                <span>{item.price.hotel} azn</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-medium">Ərazinin ipoteka dəyəri {item.mortgage} azn</p>
                            <p className="font-medium">Bir evin tikiliş qiyməti {item.building_home} azn</p>
                            <p className="font-medium">Otelin tikiliş qiyməti {item.building_hotel} azn</p>
                        </div>
                    </div>
                </div>
            )}

            {item.type === 'transport' && (
                <div className="border-2 border-black p-3">
                    <div className="flex flex-col text-center">
                        <h4 className="font-medium text-lg uppercase">{item.name}</h4>
                    </div>
                    <div className="flex items-center justify-center">
                        <figure className="w-28 h-28">
                            <img src={item.image} className="object-contain w-full h-full" alt={item.name}/>
                        </figure>
                    </div>
                    <div className="text-center">
                        <p className="font-medium">Kirayə {item.empty_area} azn</p>
                        <p className="font-medium">2 nəqliyyat vasitəsi {item.empty_area} azn</p>
                        <p className="font-medium">3 nəqliyyat vasitəsi {item.empty_area} azn</p>
                        <p className="font-medium">Ərazinin ipoteka dəyəri {item.mortgage} azn</p>
                    </div>
                </div>
            )}

            {item.type === 'company' && (
                <div className="border-2 border-black p-3">
                    <div className="flex flex-col text-center">
                        <h4 className="font-medium text-lg uppercase">{item.name}</h4>
                    </div>
                    <div className="flex items-center justify-center">
                        <figure className="w-28 h-28">
                            <img src={item.image} className="object-contain w-full h-full" alt={item.name}/>
                        </figure>
                    </div>
                    <div className="text-center">
                        <p className="font-medium">Bu kartlarda birinə sahib olduqda atılan zərin <b>{item.one_price}</b> qatı ödəniş olunmalıdır.</p>
                        <p className="font-medium">Bu kartlarda hər iksinə sahib olduqda atılan zərin <b>{item.two_price}</b> qatı ödəniş olunmalıdır.</p>
                        <p className="font-medium mt-4">Ərazinin ipoteka dəyəri {item.mortgage} azn</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AreaTitleDeed;
