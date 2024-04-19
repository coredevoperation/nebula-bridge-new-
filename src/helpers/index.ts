export const getNetworkData = () => {
        // @ts-ignore
    const networkData = JSON.parse(localStorage.getItem("user-wallet"))
        if(networkData) {
            return networkData;
        }
}
