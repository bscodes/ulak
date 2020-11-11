import React from 'react';
import './hizmetlerimiz.scss';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { useHistory } from 'react-router-dom';

import 'react-web-tabs/dist/react-web-tabs.css';

/* images */
import catiheader from '../../image/catiheader.png';


const Hizmetlerimiz = () => {

  // get control of route path
  const history = useHistory();

  function handlePath(num) {
    // push a hizmetlerimiz/pathname
    history.push(`/hizmetlerimiz/${num}`)
  }

  // get last letter of routepath
  // we'll use it for select default tab number dynamically
  const routePath = history.location.pathname.slice(-1);

  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header hizmetlerimiz-header"
              style={{backgroundImage: `url(${catiheader})`}}
            >
              {/* <img src={catiheader} alt="" className="section-header-image"/> */}
              <h1 className="header-title text-light text-center">
                HİZMETLERİMİZ
              </h1>
            </div>  
          </div>
        </div>
      </div>
      <div className="second-section-wrapper">
        <div className="second-section  mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs defaultTab={`${routePath}`=== "z" || `${routePath}`=== "/" ? "1" : `${routePath}`} vertical>
                  <TabList>
                    <Tab tabFor="1" onClick={() => handlePath(1)}>
                      OUTBOUND
                    </Tab>
                    <Tab tabFor="2" onClick={() => handlePath(2)}>
                      INBOUND 
                    </Tab>
                    <Tab tabFor="3" onClick={() => handlePath(3)}>
                      TEKNOLOJİK ALTYAPI  
                    </Tab>
                    <Tab tabFor="4" onClick={() => handlePath(4)}>
                      DANIŞMANLIK
                    </Tab>
                    <Tab tabFor="5" onClick={() => handlePath(5)}>
                      OTOMASYON 
                    </Tab>
                    <Tab tabFor="6" onClick={() => handlePath(6)}>
                      İLETİŞİM MERKEZİ
                    </Tab>
                    <Tab tabFor="7" onClick={() => handlePath(7)}>
                      SOSYAL MEDYA
                    </Tab>
                  </TabList>
                  <TabPanel tabId="1">
                    <p>
                      <b>Telepazarlama ve Telesatış ile işinizi büyütüyoruz</b>
                    </p>

                    <p>
                    Telepazarlama ve Telesatış’ı sizin adınıza yeni iş fırsatlarını keşfetmek ve bu fırsatları gelire
                    dönüştürmek olarak görüyoruz. Size yeni müşteriler kazandırmak, mevcut müşterilerinizi
                    korumak ve onlarla olan işinizi daha da geliştirmek, en büyük motivasyonumuz. 
                    </p>

                    <p>
                    <b>Uzmanlığımız dahilinde verdiğimiz outbound hizmetler:</b>
                    </p>

                    <ul>
                      <li>Müşteri danışma ve bilgi sistemi</li>
                      <li>Şikayet yönetimi</li>
                      <li>Sipariş yönetimi</li>
                      <li>Üyelik yönetimi</li>
                      <li>Randevu alma</li>
                      <li>Sadakat sistemleri</li>
                      <li>Müşteri memnuniyeti aramaları</li>
                      <li>Hoşgeldiniz aramaları</li>
                      <li>VIP hizmetler</li>
                      <li>Bilgi güncelleme</li>
                      <li>Back office hizmetleri</li>
                      <li>E-posta ve fax yönetimi</li>
                    </ul>

                    <p>
                    Sizin için yapabileceklerimizi daha detaylı öğrenmek için bizimle irtibata geçin. 
                    </p>
                  </TabPanel>
                  <TabPanel tabId="2">
                    <p>
                      <b>Kontrol parmaklarınızın ucunda</b>
                    </p>

                    <p>
                      Müşteriniz ile müşteri temsilciniz arasında geçen konuşmanın, kalite yönergelerine ve
                      etik/yasal kurallara uygunluğu, elbette uzun vadeli başarı kriterlerinden biri. Gerçek zamanlı
                      dinleme olanağı ile, yapılan görüşmelerin içeriğini anlık olarak değerlendirebilir, müşteri
                      temsilcisinin performansını inceleyebilir ve anında geri bildirimde bulunabilirsiniz. Bu şeffaf
                      işleyiş, size kapsamlı analiz yapma kabiliyeti sunarak, müşteri risklerini tespit etmenize ve
                      böylelikle kontrolü her daim elinizde tutmanıza olanak sağlıyor. 
                    </p>

                    <p>
                    <b>Uzmanlığımız dahilinde verdiğimiz inbound hizmetler:</b>
                    </p>

                    <ul>
                      <li>Müşteri danışma ve bilgi sistemi</li>
                      <li>Şikayet yönetimi</li>
                      <li>Sipariş yönetimi</li>
                      <li>Üyelik yönetimi</li>
                      <li>Randevu alma</li>
                      <li>Sadakat sistemleri</li>
                      <li>Müşteri memnuniyeti aramaları</li>
                      <li>Hoşgeldiniz aramaları</li>
                      <li>VIP hizmetler</li>
                      <li>Bilgi güncelleme</li>
                      <li>Back office hizmetleri</li>
                      <li>E-posta ve fax yönetimi</li>
                    </ul>

                    <p>
                    Sizin için yapabileceklerimizi daha detaylı öğrenmek için bizimle irtibata geçin. 
                    </p>
                  </TabPanel>
                  <TabPanel tabId="3">
                    <p> <a href="https://www.ulakteknoloji.com.tr/" target="_blank" rel="noopener noreferrer"> Kendi Teknoloji firmamız </a> ile size kaliteli yenilikçi çözümleri sunmaktayız.</p>
                  </TabPanel>
                  <TabPanel tabId="4">
                    <p><b>Müşteri deneyimi için zeka ve strateji</b></p>
                    <p>
                      Webhelp ile geleneksel danışmanlık hizmetleri arasındaki fark, yaptığımız her şeyde akıllı ve
                      veriye dayalı bir yaklaşım benimsememizdir. İdeal müşteri deneyimini tasarlamak en
                      öncelikli konumuzdur. Bu hedefe ulaşmak ise, gelirin artırılması, maliyetlerin azaltılması ve
                      genel performansın geliştirilmesi ile mümkün olur. Webhelp, stratejik bir ortak olarak
                      hareket ederek, şirketinizin uzun vadede başarısı için tavsiye, destek ve yatırım sağlar.
                    </p>
                    <p>
                     <b>Webhelp Danışmanlık Hizmetleri</b>
                    </p>
                    <ul>
                      <li>Veri ve Analiz</li>
                      <li>Kaynak Planlama</li>
                      <li>Teknolojiye Olanak Verme</li>
                      <li>Çözüm Tasarımı</li>
                    </ul>
                  </TabPanel>
                  <TabPanel tabId="5">
                    <p>
                    Ulak Çağrı Merkezi bilişsel yeteneklerine odaklanan esnek ve uygun maliyetli bir otomasyon
                    modeli kullanarak , müşteri deneyimini geliştirmede sorunsuz bir yaklaşım sunmanıza
                    yardımcı olacaktır.
                    </p>
                  </TabPanel>
                  <TabPanel tabId="6">
                    <p><b>Müşteri Hizmetleri</b></p>
                    <ul>
                      <li>Yeni Ürün/ Hizmet Satışı/Abonelikleri (çapraz ve dikey satış seçenekleri ile)</li>
                      <li>Fatura Bilgilendirmeleri ya da Ödeme Uygulamaları</li>
                      <li>Teknik Yardım</li>
                      <li> Problem Çözme / Şikayet Yönetimi</li>
                      <li>
                        Müşteri ilişkilerindeki temel kilometer taşlarında pro-aktif yardım (hoşgeldin aramaları,
                        memnuniyet seviyesi kontrolleri, sözleşme yenilemeleri vb.)
                      </li>
                    </ul>
                    <p><b>Teknik Destek</b></p>
                    <ul>
                      <li>
                        Otomasyon ve yenilikçi teknolojilerle desteklenen, çeşitli kanallar üzerinden sunulan çok
                        dilli ve komplike hizmet (B2C, B2B, SMB, B2E ve mühendislik ortamları)
                      </li>
                      <li>
                      Kurulum ve aktivasyondan RMA yönetimine ve parça/saha desteğine kadar tüm müşteri
                      yaşam döngüsü boyunca sunulan teknik çözümler 
                      </li>
                      <li>
                      Donanım, yazılım, tüketici elektroniği, güvenlik, altyapı ve ağ ürünleri dahil olmak üzere
                      teknoloji sektörüne sunulan çeşitli hizmetler
                      </li>
                      <li>
                      Otomotiv ve perakende sektörleri ile yeni ekonomi şirketlerine ek olarak ISS'ler, MSP'ler,
                      kablosuz taşıyıcılar ve çeşitli telekomünikasyon servisi hizmetleri
                      </li>
                      <li>
                      İşletme giderlerini azaltırken müşteri deneyimini en üst seviyeye çıkaran hızlı ve etkili vaka
                      ve hesap yönetimi çözümleri
                      </li>
                    </ul>
                    <p><b>Satış</b></p>
                    <ul>
                      <li>Fırsat Yaratma ve Randevu Planlama</li>
                      <li>Veri Doğrulama Hizmetleri</li>
                      <li>Çapraz Satış ve Dikey Satış</li>
                      <li>Müşteri Tutundurma ve Bağlılık Yönetimi</li>
                      <li>Geri Kazanım Programları ve Anketler</li>
                      <li>Alacaklar Yönetimi</li>
                    </ul>
                    <p><b>Kredi ve Tahsilat</b></p>
                    <ul>
                      <li>Birinci taraf tahsilatları</li>
                      <li>Üçüncü taraf tahsilatları</li>
                      <li>Birincil ve ikincil kurtarma hizmetleri</li>
                      <li>Hoşgeldin Aramaları</li>
                      <li>Arka ofis (BPO) hizmetleri</li>
                    </ul>
                  </TabPanel>
                  <TabPanel tabId="7">
                    <p>
                      <b>Marka kimliğini esas alarak tasarladığımız kişiselleştirilmiş müşteri deneyimi ile müşteri
                      bağlılığını artırıyoruz.</b>
                    </p>
                    <p>
                    İletişim becerileri yüksek sosyal medya analistleri tarafından yönetilen ve sisteminize
                    entegre olarak çalışan bütünleşik çoklu kanallar sayesinde olağanüstü sonuçlar alarak uzun
                    vadeli ilişkiler kuruyoruz.
                    </p>
                    <p>
                    Sosyal medyayı en iyi şekilde kullanabilmeniz için e-Performance hizmetimizin bir parçası
                    olan ve 5 bölümden oluşan bir çözüm sunuyoruz.
                    </p>
                    <p><b>Size ne sunuyoruz?</b></p>
                    <ul>
                      <li>Fısıltı takibi </li>
                      <li>Etkileşim</li>
                      <li>Moderasyon</li>
                      <li>Kapsam</li>
                      <li>İçgörü</li>
                    </ul>
                    <p><b>Sosyal medya haritası</b></p>
                    <p>
                    Sosyal medyanın en büyük sorunu markanızı nerede ve nasıl konumlayacağınızı bilmemektir.
                    Fısıltı Takibi çözümümüz, markanıza ilişkin hizmetler, rakipler ve müşteri duygularına dayalı
                    analitik raporlar sunar.
                    </p>
                    <p>
                    Analistlerden oluşan bir ekip, sosyal medya durumunuzu daha iyi anlamanızı sağlayan
                    işlevsel bir sosyal medya haritası oluşturmak için milyonlarca internet verisini araştırır.
                    </p>
                    <p><b>Sosyal Etkileşim Yönetimi</b></p>
                    <p>
                    Düşük yanıt süreleri ve yüksek müşteri memnuniyeti ile sosyal medyanızı gerçek müşteri
                    hizmetlerine dönüştürün. Eşsiz müşteri etkileşimi, markanızın ilgi toplamasının ve daha fazla
                    müşteri çekmenizin en etkili yoludur. Müşterilerle verimli etkileşim sağlamak için, marka
                    ihtiyaçlarını müşteri istekleriyle uyumlu hale getiren öngörülü bir sosyal medya stratejisi
                    geliştiriyoruz.
                    </p>
                    <p>
                    Müşterilerimize sosyal müşteri hizmetleri platformlarını müşterilerle etkileşimlerini yeniden
                    tasarlama, doğrudan destek sağlama, müşteri şikayetlerini ele alma ve müşterileri iki yönlü
                    bir diyaloğa katılmaya davet eden bir platform haline getirmelerinde yardımcı oluyoruz.
                    Doğru seçilmiş ekip, süreç yönetimi ve anlamlı diyalog sayesinde marka sadakati yaratıyor
                    ve tüketicileri birer marka elçisine dönüştürüyoruz.
                    </p>
                    <p>
                    <b>Moderatör ekibi</b>
                    </p>
                    <p>
                    Moderatörlerden oluşan ekibimiz, sosyal medya platformlarındaki tüm içeriklerinizi sağlıklı
                    bir şekilde oluşturur ve gelişimini sağlar. Bu kapsamda sosyal ortamda işbirlikleri için marka
                    kimliğiyle örtüşen ünlüleri (influencer) belirleyerek projeler gelirştirebiliriz.
                    </p>
                    <p>
                    Sosyal platformlarda yapmadıklarınız da en az yaptıklarınız kadar önemlidir. İşin püf noktası,
                    asıl vne ne zaman devreye girileceğini ya da geri adım atılacağını bilmektir.
                    Teleperformance, markanızın karşılaşacağı her türlü durumu en verimli şekilde yönetir. Eşsiz
                    müşteri deneyimini yaşatmak için; self-servis toplum kültürünü nasıl yaratacağınızı ve
                    yüksek alım gücüne sahip müşterileri nasıl saptayacağınızı biliyoruz. 
                    </p>
                    <p> <b>İçgörü analizi</b> </p>
                    <p>
                    İçgörü analizi çözümümüz, müşteri hizmetlerini geliştirmek için sosyal medya
                    platformlarından edindiği bilgileri çağrı merkezi bilgisi ile birleştirir. Yaptığımız kapsamlı
                    sektörel müşteri araştırmaları sonucunda uzmanlarımız, sosyal medya kullanımınızı daha
                    verimli hale getirecek uygulanabilir öneriler sunar.
                    </p>
                    <p>
                    Bu çözümümüz, yıllardır edindiğimiz çağrı merkezi ve müşteri hizmetleri bilgimizle markanız
                    için algısal ve ileriye dönük bir strateji geliştirmenize yardımcı olur. Somut sonuçlar elde
                    etmek ve uygulanabilir planlar geliştirmek için büyük miktarlardaki veriyi analiz ediyor ve
                    gelişmiş sektör araştırmalarından yararlanıyoruz.
                    </p>

                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </>
  );
}

export default Hizmetlerimiz;