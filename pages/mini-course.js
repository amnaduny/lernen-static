import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Link from "next/link";
import { useEffect } from 'react';
import React from 'react';

export default function MiniCourse() {
    // Initialize AOS library
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
        AOS.init({
        duration: 1000, // Optional: Customize AOS settings
        once: true, // Whether the animation should only happen once
        });
    }, []);

    const miniCourses = [
        {
          title: 'ESSAY/MOTLET',
          imgSrc: '/assets/programs-section/mini-course/essay-writing.svg',
          originalPrice: 'Rp 99.000',
          priceLabel: 'Rp 35.000',
          link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20MINI%20COURSE%20-%20Essay/Motlet'
        },
        {
          title: 'CV & PORTOFOLIO',
          imgSrc: '/assets/programs-section/mini-course/cv-portofolio.svg',
          originalPrice: 'Rp 99.000',
          priceLabel: 'Rp 35.000',
          link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20MINI%20COURSE%20-%20CV%20dan%20Portofolio'
        },
        {
          title: 'SURAT REKOMENDASI',
          imgSrc: '/assets/programs-section/mini-course/surat-rekomendasi.svg',
          originalPrice: 'Rp 99.000',
          priceLabel: 'Rp 35.000',
          link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20MINI%20COURSE%20-%20Surat%20Rekomendasi'
        },
        {
          title: 'WAWANCARA',
          imgSrc: '/assets/programs-section/mini-course/wawancara.svg',
          originalPrice: 'Rp 99.000',
          priceLabel: 'Rp 35.000',
          link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20MINI%20COURSE%20-%20Wawancara'
        }
    ];

    const learningPlans = [
    {
        title: 'ESSAY/MOTLET',
        participants: '20 Peserta',
        duration: '1 Pertemuan - 2 jam',
        sections: [
        {
            title: 'Memahami Esai',
            points: [
            'Jenis-jenis esai aplikasi',
            'Apa yang dicari oleh penerima aplikasi',
            'Contoh Esai yang Berhasil',
            ],
        },
        {
            title: 'Teknik Penulisan',
            points: [
            'Cara menemukan cerita pribadi',
            'Cara menulis struktur esai yang efektif',
            'cara menulis pembukaan yang menarik',
            ],
        },
        {
            title: 'Pengembangan Ide dan Konten',
            points: [
            'Cara mengembangkan isi esai',
            'Cara mengatasi kebuntuan menulis',
            ],
        },
        {
            title: 'Tanya Jawab dan Diskusi',
            points: [
            'Tanya jawab dan diskusi mengenai kasus nyata dalam penulisan esai atau motivation letter',
            ],
        },
        ],
    },
    {
        title: 'CV & PORTOFOLIO',
        participants: '20 Peserta',
        duration: '1 Pertemuan - 2 jam',
        sections: [
        {
            title: 'Memahami CV dan Portofolio',
            points: [
            'Pemahaman tentang perbedaan antara CV dan Portofolio',
            'Komponen utama CV',
            'Komponen utama Portofolio',
            ],
        },
        {
            title: 'Teknik Penulisan CV yang Efektif',
            points: [
            'Tips menulis CV yang menarik perhatian',
            'Cara mengatur informasi dengan jelas dan terstruktur',
            'Cara menyoroti pencapaian dan keterampilan',
            ],
        },
        {
            title: 'Membuat Portofolio yang Baik',
            points: [
            'Cara memilih karya yang paling relevan dan berkualitas',
            'Cara menyusun deskripsi proyek yang informatif',
            'Cara menggunakan visual yang menarik',
            ],
        },
        {
            title: 'Teknik Penyajian dan Layout',
            points: [
            'Desain profesional',
            'Penggunaan font dan warna',
            'Alat bantu desain',
            ],
        },
        {
            title: 'Tanya Jawab dan Diskusi',
            points: [
            'Tanya jawab dan diskusi mengenai kasus nyata dalam penulisan CV dan Portofolio',
            ],
        },
        ],
    },
    {
        title: 'SURAT REKOMENDASI',
        participants: '20 Peserta',
        duration: '1 Pertemuan - 2 jam',
        sections: [
        {
            title: 'Memahami Surat Rekomendasi',
            points: [
            'Definisi dan jenis surat rekomendasi',
            'Fungsi surat rekomendasi dalam aplikasi',
            'Contoh surat rekomendasi yang baik dan efektif',
            ],
        },
        {
            title: 'Mendapatkan Surat Rekomendasi',
            points: [
            'Cara menentukan siapa yang layak dimintai surat rekomendasi',
            'Etika meminta surat rekomendasi',
            'Contoh permintaan surat rekomendasi yang sopan dan profesional',
            'Informasi yang perlu disiapkan untuk pemberi rekomendasi',
            ],
        },
        {
            title: 'Membuat Surat Rekomendasi',
            points: [
            'Struktur surat rekomendasi',
            'Cara menyoroti prestasi, keterampilan, dan karakter yang relevan',
            'Contoh konkret dan anekdot',
            'Penggunaan bahasa yang positif dan mendukung',
            'Contoh surat rekomendasi yang kuat',
            ],
        },
        {
            title: 'Tanya Jawab dan Diskusi',
            points: [
            'Tanya jawab dan diskusi mengenai kasus nyata dalam mendapatkan Surat Rekomendasi',
            ],
        },
        ],
    },
    {
        title: 'WAWANCARA',
        participants: '20 Peserta',
        duration: '1 Pertemuan - 2 jam',
        sections: [
        {
            title: 'Memahami Proses Wawancara',
            points: [
            'Tujuan wawancara penerimaan',
            'Jenis-jenis wawancara',
            'Apa yang dicari oleh pewawancara',
            ],
        },
        {
            title: 'Persiapan Sebelum Wawancara',
            points: [
            'Riset tentang universitas dan program studi',
            'Persiapan dokumen dan portofolio yang relevan',
            'Penyusunan daftar pertanyaan yang mungkin diajukan',
            'Tips memilih pakaian yang sesuai',
            ],
        },
        {
            title: 'Teknik Menjawab Pertanyaan Wawancara',
            points: [
            'Teknik STAR',
            'Penyusunan jawaban yang terstruktur dan relevan',
            'Kelebihan pribadi dan prestasi',
            'Cara mengatasi pertanyaan sulit dan menjebak',
            ],
        },
        {
            title: 'Latihan Praktis Wawancara',
            points: [
            'Simulasi wawancara dengan mentor atau sesama peserta',
            'Cara menjawab pertanyaan umum dan spesifik',
            ],
        },
        {
            title: 'Mengatasi Kecemasan dan Meningkatkan Kepercayaan Diri',
            points: [
            'Teknik relaksasi dan pernapasan',
            'Strategi mengelola stres dan kecemasan',
            'Membangun kepercayaan diri melalui latihan dan persiapan',
            ],
        },
        {
            title: 'Tanya Jawab dan Diskusi',
            points: [
            'Tanya jawab dan diskusi mengenai kasus nyata dalam interaksi Wawancara',
            ],
        },
        ],
    },
    ];
      
      
    const facilities = [
        {
          imgSrc: '/assets/programs-section/mini-course/motivation-letter.svg',
          title: 'Penulisan Esai atau Motivation Letter',
          description: 'Peserta akan mendapatkan sesi konsultasi dan review draft esai untuk memastikan kualitas penulisan. Contoh esai yang telah berhasil diterima di universitas ternama juga disediakan sebagai referensi.'
        },
        {
          imgSrc: '/assets/programs-section/mini-course/cv-building.svg',
          title: 'Pembuatan CV dan Portofolio',
          description: 'Peserta akan menerima template CV dan portofolio profesional yang dapat langsung digunakan atau disesuaikan. Sesi pendampingan disediakan untuk memperbaiki dan menyusun CV sesuai standar internasional. Selain itu, peserta akan memiliki akses ke contoh CV yang berhasil diterima dalam berbagai program, serta mendapatkan review dan masukan langsung dari mentor untuk meningkatkan kualitas CV dan portofolio.'
        },
        {
          imgSrc: '/assets/programs-section/mini-course/research-plan.svg',
          title: 'Membuat dan Menyusun Surat Rekomendasi',
          description: 'Peserta akan mendapatkan panduan dalam memilih pemberi rekomendasi yang tepat. Mentor akan membantu menyusun poin-poin penting dalam surat rekomendasi, diikuti dengan review dan penyempurnaan oleh mentor berpengalaman untuk memastikan kualitas surat rekomendasi yang dihasilkan.'
        },
        {
          imgSrc: '/assets/programs-section/mini-course/interview-preparation.svg',
          title: 'Persiapan Wawancara untuk Penerimaan Universitas dan Beasiswa',
          description: 'Peserta akan mengikuti simulasi wawancara yang dilengkapi dengan feedback langsung untuk memperbaiki performa. Daftar pertanyaan umum dan cara menjawab yang efektif disediakan untuk membantu persiapan. Selain itu, sesi coaching akan meningkatkan rasa percaya diri peserta dalam wawancara yang dapat digunakan untuk evaluasi diri lebih lanjut.'
        }
    ];

    return (
        <div>
            {/* Course Program */}
            <section className="course-program responsive-text">
                <div className="container my-3">
                    <div className="title responsive-text text-center" data-aos="zoom-in">
                        <h2>Mini Course</h2>
                        <p>
                            <i>
                                " Program kursus yang cocok jika kamu ingin mengetahui panduan singkat <br />
                                namun mendalam mengenai topik-topik khusus persisapan melanjutkan <br />
                                studi S1 dan S2 di luar negeri "
                            </i>
                        </p>
                        <div className="d-flex align-items-center justify-content-between my-4">
                        <Link href="/scholarship-care">
                            <a className="button-nav btn btn-outline-dark btn-sm">
                                ← Scholarship Care
                            </a>
                        </Link>
                        <hr className="flex-grow-1 mx-3" style={{ border: 'none', height: '1px', backgroundColor: '#ccc' }} />
                        <Link href="/core-program">
                            <a className="button-nav btn btn-outline-dark btn-sm">
                                Core Program →
                            </a>
                        </Link>
                        </div>
                    </div>

                    <div className="row text-center align-items-center responsive-text" data-aos="zoom-in">
                        {miniCourses.map((course, index) => (
                        <div
                            className={`col-6 col-md-3 d-flex justify-content-md-center ${
                            index % 2 === 0 ? 'justify-content-end' : 'justify-content-start'
                            } p-1`}
                            key={index}
                        >
                            <div className="card align-items-center">
                                <img
                                    src={course.imgSrc}
                                    alt={course.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                    {course.title}
                                    {/* Add double <br /> if title is 'essay/motlet' or 'wawancara' */}
                                    {(course.title === 'ESSAY/MOTLET' || course.title === 'WAWANCARA') && <><br /><br /></>}
                                    </h5>
                                    <h6 className="text-danger">
                                    <s>
                                        <em>{course.originalPrice}</em>
                                    </s>
                                    </h6>
                                    <div className="d-flex button-price">
                                        <Link href={course.link}>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn custom-btn d-lg-block mx-auto"
                                            >
                                                {course.priceLabel}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <h4 className="mt-4" data-aos="zoom-in">Apa itu Mini Course?</h4>
                    <p data-aos="zoom-in">
                        Mini Course adalah sesi bimbingan singkat yang dirancang untuk membantu calon mahasiswa yang ingin melanjutkan studi ke jenjang S1 dan S2 di luar negeri. Dengan durasi maksimal 2 jam, setiap mini course fokus pada topik penting dalam proses melanjutkan studi, seperti cara menulis esai yang baik, persiapan wawancara, strategi memilih universitas yang tepat, dan pengisian formulir aplikasi. Program ini sangat cocok bagi peserta yang punya jadwal padat dan butuh panduan cepat dan tepat sasaran. Dengan materi yang selalu diperbarui dan dukungan mentor berpengalaman, Mini Course menawarkan sesi interaktif dan informatif. <br /> Pendekatan yang personal dan terarah ini membantu peserta lebih siap dan percaya diri, sehingga peluang peserta untuk diterima di universitas impian semakin besar. Selain itu, peserta juga bisa langsung bertanya dan berdiskusi dengan mentor, memastikan peserta benar-benar paham dan bisa menerapkan apa yang dipelajari dalam proses mengejar kampus impian.
                    </p>

                    <h4 data-aos="zoom-in">Bagaimana dengan rencana pembelajarannya?</h4>
                    <p data-aos="zoom-in">
                        Rencana pembelajaran disusun dengan kurikulum yang akan membahas topik tertentu sesuai pilihan kursus program yang dipilih.
                    </p>

                    {/* Learning Plans */}
                    <div className="row justify-content-center align-items-center responsive-text">
                    {learningPlans.map((plan, index) => (
                        <div
                            className="col-12 col-sm-12 d-flex justify-content-center p-2"
                            data-aos="zoom-in"
                            key={index}
                        >
                            <div className="roadmap card">
                                <div className="card-body">
                                    <div className="wrapper text-center">
                                        <h5 className="mt-2">{plan.title}</h5>
                                        <p className="m-1">
                                            {plan.participants} <br />
                                            {plan.duration}
                                        </p>
                                    </div>
                                    <hr style={{ border: '1px solid #000' }} />
                                    <div className="row">
                                        {plan.sections.map((section, sIndex) => (
                                        <React.Fragment key={sIndex}>
                                            <p className="text-left m-1">
                                                <strong>{section.title}</strong>
                                            </p>
                                            <ul className="card-text check-list text-left">
                                                {section.points.map((point, pIndex) => (
                                                    <li key={pIndex}>{point}</li>
                                                ))}
                                            </ul>
                                        </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                    <h4 className="mt-4 mb-3" data-aos="zoom-in">Fasilitas apa saja yang akan didapat?</h4>
                    <p data-aos="zoom-in">
                        Meskipun biaya terjangkau, fasilitas yang diberikan tetap berkualitas. Hal ini memungkinkan peserta mendapatkan pengalaman belajar optimal, dan dukungan lainnya, tanpa mengorbankan kualitas pendidikan.
                    </p>

                    <div data-aos="zoom-in">
                        {facilities.map((facility, index) => (
                        <div className="facility row align-items-center my-2" key={index}>
                            <div className="col-auto">
                                <img
                                    src={facility.imgSrc}
                                    alt={facility.title}
                                />
                            </div>
                            <div className="col">
                                <h5>{facility.title}</h5>
                                <p>{facility.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}