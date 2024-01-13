import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from "leaflet"
import Image from "next/image"

const icon = L.icon({
    iconUrl: '/images/icon.png',
    iconSize: [20, 20]
})

const expoOptions = { color: 'red' }
const millenniumOptions = { color: 'blue' }

const expoPolyline: [number, number][][] = [
    [
        [49.28596254125285, -123.1115641984694],
        [49.28562655391477, -123.12013658449946],
        [49.28332068860059, -123.11610837886587],
        [49.279593538903825, -123.10973723719147],
        [49.27318833962156, -123.10037533014491],
        [49.26262556853368, -123.06922959912575],
        [49.24828748044079, -123.05597868051555],
        [49.244224930897545, -123.04598147356097],
        [49.2385357389229, -123.0318416494578],
        [49.229846559084535, -123.01262806720702],
        [49.225828722653375, -123.00394849445841],
        [49.220110564198315, -122.98845223374066],
        [49.2122090841458, -122.95916947524144],
        [49.200050597176755, -122.94912210695107],
        [49.20152302863246, -122.91265937821458],
        [49.2048263863152, -122.90604161170117], //columbia
        [49.2247492784129, -122.8893533313045],
        [49.23320914057442, -122.8827972324297],
        [49.2484585774381, -122.89692764718882],
        [49.253476998259956, -122.91809540657253]
    ],
    [
        [49.28596254125285, -123.1115641984694],
        [49.28562655391477, -123.12013658449946],
        [49.28332068860059, -123.11610837886587],
        [49.279593538903825, -123.10973723719147],
        [49.27318833962156, -123.10037533014491],
        [49.26262556853368, -123.06922959912575],
        [49.24828748044079, -123.05597868051555],
        [49.244224930897545, -123.04598147356097],
        [49.2385357389229, -123.0318416494578],
        [49.229846559084535, -123.01262806720702],
        [49.225828722653375, -123.00394849445841],
        [49.220110564198315, -122.98845223374066],
        [49.2122090841458, -122.95916947524144],
        [49.200050597176755, -122.94912210695107],
        [49.20152302863246, -122.91265937821458],
        [49.2048263863152, -122.90604161170117],
        [49.20433152023783, -122.8743407662247],
        [49.19898868800528, -122.85072488150593],
        [49.18957322111294, -122.84797372385256],
        [49.18295549228162, -122.84477853543264]
    ]
]

const millenniumPolyline: [number, number][] = [
    [49.26590784923915, -123.0789991566088],
    [49.25894539616446, -123.04538851025973],
    [49.26083536319238, -123.03279926371272],
    [49.26499749648871, -123.0136123291517],
    [49.266396574716595, -123.00163992359386],
    [49.26469541711446, -122.98218161413023],
    [49.25922280028765, -122.96403088346],
    [49.25463930035987, -122.93920909328277],
    [49.253476998259956, -122.91809540657253],
    [49.2484585774381, -122.89692764718882],
    [49.26134056629032, -122.88982617732917],
    [49.2779986736361, -122.84584474841797],
    [49.27723271042005, -122.82822048245389],
    [49.274811242859954, -122.80077036734338],
    [49.280360663252836, -122.79383918387805],
    [49.28565918325952, -122.79156621011902]
]

const Map = () => {
    return (
        <>
            <div style={{ height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: 'purple', gap: '10px' }}>
                <Image src='/images/how2go.png' height={30} width={20} alt='how2go logo' />
                <h1 style={{ fontSize: '20px', color: 'white' }}>How2Go</h1>
            </div>
            <MapContainer
                style={{ height: '100vh' }}
                center={[49.24584406444096, -122.97478007167216]}
                zoom={14}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; By <a href="https://github.com/jnip2/mdia3109-leaflet">Joey Nip</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker
                    position={[49.28596254125285, -123.1115641984694]}
                    icon={icon}
                >
                    <Popup>
                        Waterfront
                    </Popup>
                </Marker>
                <Marker
                    position={[49.28562655391477, -123.12013658449946]}
                    icon={icon}
                >
                    <Popup>
                        Burrard
                    </Popup>
                </Marker>
                <Marker
                    position={[49.28332068860059, -123.11610837886587]}
                    icon={icon}
                >
                    <Popup>
                        Granville
                    </Popup>
                </Marker>
                <Marker
                    position={[49.279593538903825, -123.10973723719147]}
                    icon={icon}
                >
                    <Popup>
                        Stadium-Chinatown
                    </Popup>
                </Marker>
                <Marker
                    position={[49.27318833962156, -123.10037533014491]}
                    icon={icon}
                >
                    <Popup>
                        Main Street-Science World
                    </Popup>
                </Marker>
                <Marker
                    position={[49.26262556853368, -123.06922959912575]}
                    icon={icon}
                >
                    <Popup>
                        Commercial-Broadway
                    </Popup>
                </Marker>
                <Marker
                    position={[49.24828748044079, -123.05597868051555]
                    }
                    icon={icon}
                >
                    <Popup>
                        Nanaimo
                    </Popup>
                </Marker>
                <Marker
                    position={[49.244224930897545, -123.04598147356097]}
                    icon={icon}
                >
                    <Popup>
                        29th Avenue
                    </Popup>
                </Marker>
                <Marker
                    position={[49.2385357389229, -123.0318416494578]}
                    icon={icon}
                >
                    <Popup>
                        Joyce-Collingwood
                    </Popup>
                </Marker>
                <Marker
                    position={[49.229846559084535, -123.01262806720702]}
                    icon={icon}
                >
                    <Popup>
                        Patterson
                    </Popup>
                </Marker>
                <Marker
                    position={[49.225828722653375, -123.00394849445841]}
                    icon={icon}
                >
                    <Popup>
                        Metrotown
                    </Popup>
                </Marker>
                <Marker
                    position={[49.220110564198315, -122.98845223374066]}
                    icon={icon}
                >
                    <Popup>
                        Royal Oak
                    </Popup>
                </Marker>
                <Marker
                    position={[49.2122090841458, -122.95916947524144]}
                    icon={icon}
                >
                    <Popup>
                        Edmonds
                    </Popup>
                </Marker>
                <Marker
                    position={[49.200050597176755, -122.94912210695107]}
                    icon={icon}
                >
                    <Popup>
                        22nd Street
                    </Popup>
                </Marker>
                <Marker
                    position={[49.20152302863246, -122.91265937821458]}
                    icon={icon}
                >
                    <Popup>
                        New Westminster
                    </Popup>
                </Marker>
                <Marker
                    position={[49.2048263863152, -122.90604161170117]}
                    icon={icon}
                >
                    <Popup>
                        Columbia
                    </Popup>
                </Marker>
                <Marker
                    position={[49.2247492784129, -122.8893533313045]}
                    icon={icon}
                >
                    <Popup>
                        Sapperton
                    </Popup>
                </Marker>
                <Marker
                    position={[49.23320914057442, -122.8827972324297]}
                    icon={icon}
                >
                    <Popup>
                        Braid
                    </Popup>
                </Marker>
                <Marker
                    position={[49.2484585774381, -122.89692764718882]}
                    icon={icon}
                >
                    <Popup>
                        Lougheed Town Centre
                    </Popup>
                </Marker>
                <Marker
                    position={[49.253476998259956, -122.91809540657253]}
                    icon={icon}
                >
                    <Popup>
                        Production Way-University
                    </Popup>
                </Marker>
                <Marker
                    position={[49.20433152023783, -122.8743407662247]}
                    icon={icon}
                >
                    <Popup>
                        Scott Road
                    </Popup>
                </Marker>
                <Marker
                    position={[49.19898868800528, -122.85072488150593]}
                    icon={icon}
                >
                    <Popup>
                        Gateway
                    </Popup>
                </Marker>
                <Marker
                    position={[49.18957322111294, -122.84797372385256]}
                    icon={icon}
                >
                    <Popup>
                        Surrey Central
                    </Popup>
                </Marker>
                <Marker
                    position={[49.18295549228162, -122.84477853543264]}
                    icon={icon}
                >
                    <Popup>
                        King George
                    </Popup>
                </Marker>

                {/* millennium */}
                <Marker
                    position={[49.26590784923915, -123.0789991566088]}
                    icon={icon}
                >
                    <Popup>
                        VCC-Clark
                    </Popup>
                </Marker>
                <Marker
                    position={[49.25894539616446, -123.04538851025973]}
                    icon={icon}
                >
                    <Popup>
                        Renfew
                    </Popup>
                </Marker>
                <Marker
                    position={[49.26083536319238, -123.03279926371272]}
                    icon={icon}
                >
                    <Popup>
                        Rupert
                    </Popup>
                </Marker>
                <Marker
                    position={[49.26499749648871, -123.0136123291517]}
                    icon={icon}
                >
                    <Popup>
                        Gilmore
                    </Popup>
                </Marker>
                <Marker
                    position={[49.266396574716595, -123.00163992359386]}
                    icon={icon}
                >
                    <Popup>
                        Brentwood Town Centre
                    </Popup>
                </Marker>
                <Marker
                    position={[49.26469541711446, -122.98218161413023]}
                    icon={icon}
                >
                    <Popup>
                        Holdom
                    </Popup>
                </Marker>
                <Marker
                    position={[49.25922280028765, -122.96403088346]}
                    icon={icon}
                >
                    <Popup>
                        Sperling-Burnaby Lake
                    </Popup>
                </Marker>
                <Marker
                    position={[49.25463930035987, -122.93920909328277]}
                    icon={icon}
                >
                    <Popup>
                        Lake City Way
                    </Popup>
                </Marker>
                <Marker
                    position={[49.26134056629032, -122.88982617732917]}
                    icon={icon}
                >
                    <Popup>
                        Burquitlam
                    </Popup>
                </Marker>
                <Marker
                    position={[49.2779986736361, -122.84584474841797]}
                    icon={icon}
                >
                    <Popup>
                        Moody Centre
                    </Popup>
                </Marker>
                <Marker
                    position={[49.27723271042005, -122.82822048245389]}
                    icon={icon}
                >
                    <Popup>
                        Inlet Centre
                    </Popup>
                </Marker>
                <Marker
                    position={[49.274811242859954, -122.80077036734338]}
                    icon={icon}
                >
                    <Popup>
                        Coquitlam Central
                    </Popup>
                </Marker>
                <Marker
                    position={[49.280360663252836, -122.79383918387805]}
                    icon={icon}
                >
                    <Popup>
                        Lincoln
                    </Popup>
                </Marker>
                <Marker
                    position={[49.28565918325952, -122.79156621011902]}
                    icon={icon}
                >
                    <Popup>
                        Lafarge Lake-Douglas
                    </Popup>
                </Marker>
                <Polyline pathOptions={expoOptions} positions={expoPolyline} />
                <Polyline pathOptions={millenniumOptions} positions={millenniumPolyline} />
            </MapContainer>
        </>
    )
}

export default Map