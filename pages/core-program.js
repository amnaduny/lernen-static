import "bootstrap/dist/css/bootstrap.min.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Link from "next/link";
import { useEffect } from 'react';
import React from 'react';

export default function CorePorgram() {
    // Initialize AOS library
    useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
      AOS.init({
        duration: 1000, // Optional: Customize AOS settings
        once: true, // Whether the animation should only happen once
      });
    }, []);
  
    const CorePrograms = [
      {
        title: 'BASIC',
        imgSrc: '/assets/programs-section/core-program/basic.svg',
        originalPrice: 'Rp 949.000',
        priceLabel: 'Rp 749.000',
        link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20CORE%20PROGRAM%20-%20BASIC'
      },
      {
        title: 'PREMIUM',
        imgSrc: '/assets/programs-section/core-program/premium.svg',
        originalPrice: 'Rp 2.149.000',
        priceLabel: 'Rp 1.800.000',
        link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20CORE%20PROGRAM%20-%20PREMIUM'
      },
      {
        title: 'ADVANCED',
        imgSrc: '/assets/programs-section/core-program/advanced.svg',
        originalPrice: 'Rp 3.949.000',
        priceLabel: 'Rp 3.600.000',
        link: 'https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20CORE%20PROGRAM%20-%20ADVANCED'
      },
      {
        title: 'Bootcamp LPDP',
        imgSrc: '/assets/programs-section/core-program/lpdp-bootcamp.svg',
        originalPrice: '',
        priceLabel: 'Coming Soon',
        link: '/'
      }
    ];
  
    const roadmaps = [
      {
        header: 'BASIC',
        participants: '6 - 10 Peserta',
        duration: '12 Pertemuan',
        columns: [
          [
            {
              title: 'Meeting 1 and 2',
              points: ['Initial profile assessment', 'Target setting (Campuses, Countries, Scholarships)']
            },
            {
              title: 'Meeting 3',
              points: ['Self-assessment overview', 'Initial planning']
            },
            {
              title: 'Meeting 4',
              points: ['CV basics']
            },
            {
              title: 'Meeting 5 and 6',
              points: ['University ranking & program types', 'Subject identification & admission requirements']
            }
          ],
          [
            {
              title: 'Meeting 7 and 8',
              points: ['Writing basics', 'Mentoring and proofreading']
            },
            {
              title: 'Meeting 9 and 10',
              points: ['Interview process overview']
            },
            {
              title: 'Meeting 11 and 12',
              points: ['Candidate profile & scholarship criteria', 'Requirement preparation']
            },
            {
              title: 'Bonus',
              points: ['General email support, limited document review, group webinars/ WA']
            }
          ]
        ]
      },
      {
        dualHeader: [
          { title: 'PREMIUM', info: '4 - 5 Peserta \n 23 Pertemuan / 4 bulan' },
          { title: 'ADVANCED', info: '1 - 3 Peserta \n 23 Pertemuan / 4 bulan' }
        ],
        columns: [
          [
            {
              title: 'Meeting 1 and 3',
              points: ['Comprehensive profile analysis', 'Target refinement & specialization focus', 'Candidate profiling']
            },
            {
              title: 'Meeting 4 and 5',
              points: ['Detailed self-assessment & feedback', 'Personalized candidacy enhancement plan', 'Customized action plan']
            },
            {
              title: 'Meeting 6 and 7',
              points: ['Advanced CV development']
            },
            {
              title: 'Meeting 8 and 10',
              points: ['University & program matching', 'Requirements & qualification standards', 'Research preparation (for research programs)']
            },
            {
              title: 'Meeting 11 and 13',
              points: ['Writing & mentoring', 'Proofreading & finalization']
            }
          ],
          [
            {
              title: 'Meeting 14 and 16',
              points: ['Research plan writing', 'Mentoring & proofreading']
            },
            {
              title: 'Meeting 17 and 19',
              points: ['Interview process overview', 'Interview materials & mock interview', 'Boost interview confidence']
            },
            {
              title: 'Meeting 20 and 22',
              points: ['Candidate profile & scholarship criteria', 'Requirement preparation & proofreading', 'Interview preparation for scholarships']
            },
            {
              title: 'Meeting 23',
              points: ['Visa & departure preparation', 'Study life & cultural preparation']
            },
            {
              title: 'Bonus',
              points: ['Dedicated advisor, unlimited document reviews, priority support, premium resources, post-admission support']
            }
          ]
        ]
      }
    ];
  
    const facilities = [
      {
        imgSrc: '/assets/programs-section/core-program/describe-your-profile.svg',
        title: 'Describe Your Profile',
        description: 'Mengidentifikasi dan mengomunikasikan elemen penting dari latar belakang akademik dan pengalaman pribadi.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/strength-and-weakness-analysis.svg',
        title: 'Strengths & Weakness Analysis',
        description: 'Mengevaluasi kekuatan dan kelemahan untuk mempersiapkan strategi pengembangan diri.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/cv-building.svg',
        title: 'CV Building',
        description: 'Menyusun CV yang menarik dan sesuai standar internasional untuk keperluan aplikasi.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/campus-dream-and-how-to-get-loa.svg',
        title: 'Campus Dream & How to Get LoA',
        description: 'Memilih kampus impian dan memahami strategi untuk mendapatkan Letter of Acceptance (LoA).'
      },
      {
        imgSrc: '/assets/programs-section/core-program/motivation-letter.svg',
        title: 'Motivation Letter',
        description: 'Menulis surat motivasi yang meyakinkan dan sesuai dengan tujuan studi.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/research-plan.svg',
        title: 'Research Plan (Premium & Advanced Program)',
        description: 'Menyusun rencana penelitian yang sesuai dengan program studi yang dituju.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/interview-preparation.svg',
        title: 'Interview Preparation',
        description: 'Melatih keterampilan menjawab pertanyaan wawancara seleksi dengan percaya diri.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/scholarship-preparation-class.svg',
        title: 'Scholarship Preparation Class',
        description: 'Menyusun aplikasi dan strategi untuk mendapatkan beasiswa.'
      },
      {
        imgSrc: '/assets/programs-section/core-program/arrival-preparation.svg',
        title: 'Arrival Preparation (Premium & Advanced Program)',
        description: 'Mempersiapkan diri untuk kehidupan akademik dan sosial di negara tujuan.'
      }
    ];
  
    return (
      <div>
        {/* Course Program */}
        <section className="course-program responsive-text">
          <div className="container my-3">
            <div className="title text-center" data-aos="zoom-in">
              <h2>Core Program</h2>
              <p>
                <i>
                  " Program kursus yang cocok jika kamu ingin mengetahui panduan dari <br />
                  basic hingga expert untuk persiapan melanjutkan S1 atau S2 di luar negeri "
                </i>
              </p>
  
              <div className="d-flex align-items-center justify-content-between my-4">
                <Link href="/mini-course">
                    <a className="button-nav btn btn-outline-dark btn-sm">
                        &#x2190; Mini Course
                    </a>
                </Link>
                <hr className="flex-grow-1 mx-3" style={{ border: 'none', height: '1px', backgroundColor: '#ccc' }} />
                <Link href="/scholarship-care">
                    <a className="button-nav btn btn-outline-dark btn-sm">
                        Scholarship Care &#x2192;
                    </a>
                </Link>
              </div>
            </div>
  
            {/* Pilihan Level Core Program */}
            <div className="row text-center align-items-center" data-aos="zoom-in">
              {CorePrograms.map((program, index) => (
                <div
                  className={`col-6 col-lg-3 d-flex justify-content-lg-center ${
                    index % 2 === 0 ? 'justify-content-end' : 'justify-content-start'
                  } p-1`}
                  key={index}
                >
                  <div className="card align-items-center core-program">
                    <img
                      src={program.imgSrc}
                      alt={program.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {program.title}
                        <br />
                        <br />
                      </h5>
                      {program.originalPrice && (
                        <h5 className="text-danger">
                          <s>
                            <em>{program.originalPrice}</em>
                          </s>
                        </h5>
                      )}
  
                      {/* ✅ Hide button if title is 'Bootcamp LPDP' */}
                      {program.title !== 'Bootcamp LPDP' && (
                        <div className="d-flex flex-column button-price">
                            <Link href={program.link}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn custom-btn d-lg-block mx-auto"
                                >
                                    {program.priceLabel}
                                </a>
                            </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            <h4 className="mt-4" data-aos="zoom-in">
              Apa itu Core Program?
            </h4>
            <p data-aos="zoom-in">
              Core Program adalah program bimbingan intensif untuk mempersiapkan studi lanjut ke luar negeri (S1/S2),
              baik dengan maupun tanpa beasiswa. Program ini dirancang bagi siswa SMA dan mahasiswa S1 yang ingin
              melanjutkan studi dengan percaya diri melalui pemahaman menyeluruh mengenai proses, dokumen, dan seleksi.
              <br /><br />
              Durasi program meliputi 12 sesi (paket basic) atau 23 sesi (paket premium dan advanced) selama 4 bulan.
              Metode bimbingan meliputi pembahasan persyaratan dasar, dokumen, latihan soal, diskusi,
              peer review, dan simulasi untuk memaksimalkan pemahaman mentee.
            </p>
  
            <h4 data-aos="zoom-in">
              Bagaimana dengan rencana pembelajarannya?
            </h4>
            <p data-aos="zoom-in">
              Rencana pembelajaran disusun dengan kurikulum yang terstruktur, mencakup teori, praktik, dan diskusi.
              Setiap pertemuan akan membahas topik tertentu, dimulai dari dasar hingga tingkat lanjut,
              dengan evaluasi dan tugas untuk mengukur kemajuan peserta.
            </p>
            
            {/* Curriculum Roadmap */}
            <div className="row justify-content-center align-items-center">
              {roadmaps.map((roadmap, index) => (
                <div className="col-12 col-sm-12 d-flex justify-content-center p-2" data-aos="zoom-in" key={index}>
                  <div className="roadmap card">
                    <div className="card-body">
                      {roadmap.header && (
                        <div className="wrapper text-center">
                          <h5 className="mt-2">{roadmap.header}</h5>
                          <p className="m-1">
                            {roadmap.participants} <br />
                            {roadmap.duration}
                          </p>
                        </div>
                      )}
  
                      {roadmap.dualHeader && (
                        <div className="row">
                          <div className="col-6">
                            <div className="wrapper text-center">
                              <h5 className="mt-2">{roadmap.dualHeader[0].title}</h5>
                              <p className="m-1">{roadmap.dualHeader[0].info}</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="wrapper text-center">
                              <h5 className="mt-2">{roadmap.dualHeader[1].title}</h5>
                              <p className="m-1">{roadmap.dualHeader[1].info}</p>
                            </div>
                          </div>
                        </div>
                      )}
  
                      <hr style={{ border: '1px solid #000' }} />
  
                      <div className="row">
                        {roadmap.columns.map((col, colIndex) => (
                          <div className="col-6" key={colIndex}>
                            {col.map((item, i) => (
                              <div key={i}>
                                <p className="text-left m-1">
                                  <strong>{item.title}</strong>
                                </p>
                                <ul className="card-text check-list text-left">
                                  {item.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fasilitas */}
            <h4 className="mt-4 mb-3" data-aos="zoom-in">
              Fasilitas apa saja yang akan didapat?
            </h4>
            <p data-aos="zoom-in">
              Meskipun biaya terjangkau, fasilitas yang diberikan tetap berkualitas.
              Hal ini memungkinkan peserta mendapatkan pengalaman belajar optimal,
              dan dukungan lainnya, tanpa mengorbankan kualitas pendidikan.
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