import { Tabel } from "../../component/table";
import { DataKisiMentah, DataSpectrometer,DataIndexBias,DataKisiMP5 } from "./dataMP5";

function Layout(title, height){
    let layout = {
      margin: {
        autoexpand : false,
        b:0,
        t:35
       },
       height,
       title
     }
     return layout
   } 

function TabelPengkuran(){
    function TabelInformasi(){
          return (
             <div className='TabelInformasi'>
              <Tabel layout={Layout('Data Informasi',200)} header={['Besaran', 'Nilai' ]} data={[["l (m)", "d-100mm (m)", "d-300mm (m)", "d-600mm (m)", "Sudut 'Apex' Prisma"],[`0.2`, DataKisiMentah.helium.kisi100mm.d, DataKisiMentah.helium.kisi300mm.d, DataKisiMentah.helium.kisi600mm.d, `60${decodeURI('%C2%B0')}` ]]} />
             </div>
           )
        }
    function TabelSkala(){
        return (
            <div className='Tabelskala'>
             <Tabel layout={Layout('Data Skala 1 cm',300)} header={['Variasi', 'Nilai (px)' ]} data={[["Helium-Kisi100mm", "Helium-Kisi300mm", "Helium-Kisi600mm","Neon-Kisi100mm", "Neon-Kisi300mm", "Neon-Kisi600mm","Hidrogen-Kisi100mm", "Hidrogen-Kisi300mm", "Hidrogen-Kisi600mm"],["163 x 2","264 x 4", "280 x 12", "232 x 6", "267 x 4", "222 x 2", "- x -", "215 x 1", "211 x 2" ]]} />
            </div>
          )
    }
    function TabelHelium100mm(){
        return(
            <div className='TabelHelium100mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Helium pada kisi 100mm',250)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.helium.kisi100mm.warna, DataKisiMP5.helium.kisi100mm.x_px, DataKisiMP5.helium.kisi100mm.x, DataKisiMP5.helium.kisi100mm.lambda]} />
           </div>
        )
    }
    function TabelHelium300mm(){
        return(
            <div className='TabelHelium300mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Helium pada kisi 300mm',250)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.helium.kisi300mm.warna, DataKisiMP5.helium.kisi300mm.x_px,DataKisiMP5.helium.kisi300mm.x, DataKisiMP5.helium.kisi300mm.lambda]} />
           </div>
        )
    }
    function TabelHelium600mm(){
        return(
            <div className='TabelHelium600mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Helium pada kisi 600mm',250)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.helium.kisi600mm.warna,DataKisiMP5.helium.kisi600mm.x_px, DataKisiMP5.helium.kisi600mm.x, DataKisiMP5.helium.kisi600mm.lambda]} />
           </div>
        )
    }    
    function TabelNeon100mm(){
        return(
            <div className='TabelNeon100mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Neon pada kisi 100mm',250)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.neon.kisi100mm.warna,DataKisiMP5.neon.kisi100mm.x_px, DataKisiMP5.neon.kisi100mm.x, DataKisiMP5.neon.kisi100mm.lambda]} />
           </div>
        )
    }
    function TabelNeon300mm(){
        return(
            <div className='TabelNeon300mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Neon pada kisi 300mm',250)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.neon.kisi300mm.warna,DataKisiMP5.neon.kisi300mm.x_px, DataKisiMP5.neon.kisi300mm.x, DataKisiMP5.neon.kisi300mm.lambda]} />
           </div>
        )
    }
    function TabelNeon600mm(){
        return(
            <div className='TabelNeon600mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Neon pada kisi 600mm',250)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.neon.kisi600mm.warna,DataKisiMP5.neon.kisi600mm.x_px, DataKisiMP5.neon.kisi600mm.x, DataKisiMP5.neon.kisi600mm.lambda]} />
           </div>
        )
    }
    function TabelHidrogen100mm(){
        return(
            <div className='TabelHidrogen100mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Hidrogen pada kisi 100mm',150)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.hidrogen.kisi100mm.warna,DataKisiMP5.hidrogen.kisi100mm.x_px,DataKisiMP5.hidrogen.kisi100mm.x, DataKisiMP5.hidrogen.kisi100mm.lambda]} />
           </div>
        )
    }
    function TabelHidrogen300mm(){
        return(
            <div className='TabelHidrogen300mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Hidrogen pada kisi 300mm',150)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.hidrogen.kisi300mm.warna,DataKisiMP5.hidrogen.kisi300mm.x_px,DataKisiMP5.hidrogen.kisi300mm.x, DataKisiMP5.hidrogen.kisi300mm.lambda]} />
           </div>
        )
    }
    function TabelHidrogen600mm(){
        return(
            <div className='TabelHidrogen600mm'>
            <Tabel layout={Layout('Data Pengukuran Spektrum Emisi Hidrogen pada kisi 600mm',150)} header={['Warna','x (px)','x (cm)', `${decodeURI('%CE%BB')}(nm)`]} data={[DataKisiMentah.hidrogen.kisi600mm.warna,DataKisiMP5.hidrogen.kisi600mm.x_px, DataKisiMP5.hidrogen.kisi600mm.x, DataKisiMP5.hidrogen.kisi600mm.lambda]} />
           </div>
        )
    }
    return (
        <div className="TabelPengukuran">
            <TabelInformasi/>
            <TabelSkala/>
            <TabelHelium100mm/>
            <TabelHelium300mm/>
            <TabelHelium600mm/>
            <TabelNeon100mm/>
            <TabelNeon300mm/>
            <TabelNeon600mm/>
            <TabelNeon600mm/>
            <TabelHidrogen100mm/>
            <TabelHidrogen300mm/>
            <TabelHidrogen600mm/>
        </div>
    )
};

function TabelSpectrometer(){
    function TabelHelium(){
        return(
            <div className='TabelnHelium'>
            <Tabel layout={Layout('Data Pengukuran Spectrometer pada Helium',250)} header={['Warna',`${decodeURI('%CE%B4')}`, 'n']} data={[DataSpectrometer.helium.warna, DataSpectrometer.helium.sudut, DataIndexBias.helium]} />
           </div>
        )
    }
    function TabelNeon(){
        return(
            <div className='TabelNeon'>
            <Tabel layout={Layout('Data Pengukuran Spectrometer pada Neon',250)} header={['Warna',`${decodeURI('%CE%B4')}`, 'n']} data={[DataSpectrometer.neon.warna, DataSpectrometer.neon.sudut, DataIndexBias.neon]} />
           </div>
        )
    }
    function TabelHidrogen(){
        return(
            <div className='TabelnHidrogen'>
            <Tabel layout={Layout('Data Pengukuran Spectrometer pada Hidrogen',150)} header={['Warna',`${decodeURI('%CE%B4')}`, 'n']} data={[DataSpectrometer.hidrogen.warna, DataSpectrometer.hidrogen.sudut, DataIndexBias.hidrogen]} />
           </div>
        )
    }

    return(
        <div className="Tabel Spectrometer">
            <TabelHelium/>
            <TabelNeon/>
            <TabelHidrogen/>
        </div>
    )
}

export {TabelPengkuran,TabelSpectrometer}