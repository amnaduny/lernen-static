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

    return (
    <div>
        {/* Course Program */}
        <section className="course-program responsive-text">
            <div className="container my-3">
                <div className="title responsive-text text-center" data-aos="zoom-in">
                    <h2>Scholarship Care</h2>
                    <p>
                        <i>
                        Program kursus yang cocok jika kamu ingin mendapatkan arahan dalam menentukan <br />
                        tahapan proses pendaftaran atau pencarian beasiswa sesuai target kampus dan <br />
                        jurusan dengan waktu yang singkat
                        </i>
                    </p>
                    <div className="d-flex align-items-center justify-content-between my-4">
                        <Link href="/core-program">
                            <a className="button-nav btn btn-outline-dark btn-sm">
                                &#x2190; Core Program

                            </a>
                        </Link>
                        <hr className="flex-grow-1 mx-3" style={{ border: 'none', height: '1px', backgroundColor: '#ccc' }} />
                        <Link href="/mini-course">
                            <a className="button-nav btn btn-outline-dark btn-sm">
                                Mini Course &#x2192;
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="row text-center align-items-center responsive-text" data-aos="zoom-in">
                    {/* Master Degree Card */}
                    <div className="col-6 d-flex justify-content-md-end justify-content-center p-1">
                        <div className="card align-items-center scholarship-care">
                            <img
                                src="/assets/programs-section/scholarship-care/master-degree.svg"
                                alt="Master Degree"
                            />
                            <h5 className="card-title my-2">Master Degree</h5>
                            <h6 className="card-title m-0">3 on 1</h6>
                            <h6 className="text-danger">
                                <s><em>Rp 140.000</em></s>
                            </h6>
                            <div className="d-flex button-price m-0 p-0">
                                <Link href="https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20SCHOLARSHIP%20CARE%20-%20Master%20Degree%203%20on%201">
                                    <a
                                    target="_blank"
                                    className="btn custom-btn d-lg-block mx-auto"
                                    >
                                    Rp 75.000
                                    </a>
                                </Link>
                            </div>
                            <hr style={{ border: '1px solid #000', width: '85%' }} />
                            <h6 className="card-title m-0">1 on 1</h6>
                            <h6 className="text-danger">
                                <s><em>Rp 200.000</em></s>
                            </h6>
                            <div className="d-flex button-price m-0 p-0">
                                <Link href="https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20SCHOLARSHIP%20CARE%20-%20Master%20Degree%201%20on%201">
                                    <a
                                    target="_blank"
                                    className="btn custom-btn d-lg-block mx-auto"
                                    >
                                    Rp 140.000
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* PhD Degree Card */}
                    <div className="col-6 d-flex justify-content-md-start justify-content-center p-1">
                        <div className="card align-items-center scholarship-care">
                            <img
                                src="/assets/programs-section/scholarship-care/phd-degree.svg"
                                alt="PhD Degree"
                            />
                            <h5 className="card-title my-2">PhD Degree</h5>
                            <h6 className="card-title m-0">3 on 1</h6>
                            <h6 className="text-danger">
                                <s><em>Rp 175.000</em></s>
                            </h6>
                            <div className="d-flex button-price m-0 p-0">
                                <Link href="https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20SCHOLARSHIP%20CARE%20-%20Master%20Degree%203%20on%201">
                                    <a
                                    target="_blank"
                                    className="btn custom-btn d-lg-block mx-auto"
                                    >
                                    Rp 100.000
                                    </a>
                                </Link>
                            </div>
                            <hr style={{ border: '1px solid #000', width: '85%' }} />
                            <h6 className="card-title m-0">1 on 1</h6>
                            <h6 className="text-danger">
                                <s><em>Rp 350.000</em></s>
                            </h6>
                            <div className="d-flex button-price m-0 p-0">
                                <Link href="https://wa.me/+6282337506356?text=Saya%20tertarik%20dengan%20SCHOLARSHIP%20CARE%20-%20Master%20Degree%201%20on%201">
                                    <a
                                    target="_blank"
                                    className="btn custom-btn d-lg-block mx-auto"
                                    >
                                    Rp 200.000
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mt-4" data-aos="zoom-in">Apa itu Scholarship Care?</h4>
                <p data-aos="zoom-in">
                Scholarship Care adalah program konsultasi secara langsung dengan mentor profesional yang membantu kandidat dalam proses pendaftaran atau pencarian beasiswa sesuai target kampus dan jurusan. Program ini menyediakan pendampingan <strong>1 on 1</strong> dan <strong>3 on 1</strong> untuk membahas kendala atau pertanyaan terkait tahapan pendaftaran beasiswa dalam sesi konsultasi tunggal.
                </p>

                <h4 className="mt-4 mb-3" data-aos="zoom-in">Fasilitas apa saja yang akan didapat?</h4>
                <p data-aos="zoom-in">
                Meskipun biaya terjangkau, fasilitas yang diberikan tetap berkualitas. Hal ini memungkinkan peserta mendapatkan pengalaman belajar optimal, dan dukungan lainnya, tanpa mengorbankan kualitas pendidikan.
                </p>

                {/* Facilities */}
                <div data-aos="zoom-in">
                    <div className="facility row align-items-center my-2">
                        <div className="col-auto">
                            <img
                                src="/assets/programs-section/scholarship-care/coaching-and-assitance.svg"
                                alt="Coaching"
                            />
                        </div>
                        <div className="col">
                            <h5>Coaching and Assistance</h5>
                            <p>
                                Program ini memberikan arahan langsung dalam menentukan strategi atau langkah selanjutnya berdasarkan analisis profil dan kebutuhan kandidat.
                            </p>
                        </div>
                    </div>

                    <div className="facility row align-items-center my-2">
                        <div className="col-auto">
                            <img
                                src="/assets/programs-section/scholarship-care/proofreading.svg"
                                alt="Proofreading"
                            />
                        </div>
                        <div className="col">
                            <h5>Proofreading</h5>
                            <p>
                                Kandidat mendapat fasilitas pengecekan dan proofreading untuk salah satu dokumen yang dibutuhkan dalam pendaftaran beasiswa atau kampus.
                            </p>
                        </div>
                    </div>

                    <div className="facility row align-items-center my-2">
                        <div className="col-auto">
                            <img
                                src="/assets/programs-section/scholarship-care/exclusive-sharing.svg"
                                alt="Exclusive Sharing"
                            />
                        </div>
                        <div className="col">
                            <h5>Exclusive Sharing</h5>
                            <p>
                                Peserta mendapat kesempatan diskusi eksklusif dengan mentor selama 1 hingga 1,5 jam untuk konsultasi dan bimbingan, sesuai kebutuhan masing-masing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}