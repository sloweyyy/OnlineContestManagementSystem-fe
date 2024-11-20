import { useState, useEffect } from 'react';

const useOrgAddress = (province, district, commune, detailAddress) => {
    const [orgAddress, setOrgAddress] = useState(null);

    useEffect(() => {
        if (province && district && commune && detailAddress) {
            setOrgAddress(`${detailAddress}, ${commune.name}, ${district.name}, ${province.name}`);
        }
    }, [detailAddress]);

    return orgAddress;
};

export default useOrgAddress;