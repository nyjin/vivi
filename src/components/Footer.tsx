import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-sage-100">비비의정원</h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start text-sage-200">
                <Phone className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div>0507-1356-2666</div>
                </div>
              </div>
              <div className="flex items-start text-sage-200">
                <Mail className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div>cleopatra828@naver.com</div>
                </div>
              </div>
              <div className="flex items-start text-sage-200">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div>경기도 용인시 수지구 광교중앙로 338</div>
                  <div className="text-sm">B동 7층 717호(상현동, 광교우미뉴브)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage-100">빠른 링크</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sage-200 hover:text-white transition-colors flex items-center"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sage-200 hover:text-white transition-colors flex items-center"
                >
                  사진 합성
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="text-sage-200 hover:text-white transition-colors flex items-center"
                >
                  보정 클래스
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sage-200 hover:text-white transition-colors flex items-center"
                >
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sage-200 hover:text-white transition-colors flex items-center"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Business Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage-100">문의 채널</h3>
            <div className="space-y-3 mb-6">
              <a
                href="http://pf.kakao.com/_XYLaxb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sage-200 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>카카오톡 채널</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-sage-100">운영 시간</h4>
              <div className="space-y-1 text-sm text-sage-200">
                <div>월-금: 10:00 - 17:00</div>
                <div>토/일요일: 휴무</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sage-600">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/vivi__studio__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sage-700 hover:bg-sage-600 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-sage-200 group-hover:text-white" />
              </a>
              <a
                href="https://blog.naver.com/vivi_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sage-700 hover:bg-sage-600 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="네이버 블로그"
              >
                <svg 
                  className="w-8 h-8 group-hover:scale-105 transition-transform" 
                  viewBox="0 0 256 256" 
                  width="32" 
                  height="32"
                >
                  {/* Outer squircle-like path with brand colors */}
                  <path 
                    className="fill-sage-200 group-hover:fill-white transition-colors" 
                    d="M48,18 C96,4 160,4 208,18 C240,30 254,58 254,110 V146 C254,198 240,226 208,238 C160,252 96,252 48,238 C16,226 2,198 2,146 V110 C2,58 16,30 48,18 Z" 
                  />
                  {/* Inner speech bubble */}
                  <g>
                    {/* Rounded rectangle */}
                    <rect 
                      x="44" 
                      y="58" 
                      width="168" 
                      height="108" 
                      rx="28" 
                      ry="28" 
                      className="fill-sage-700 group-hover:fill-sage-600 transition-colors"
                    />
                    {/* Tail */}
                    <polygon 
                      points="116,166 140,166 128,194" 
                      className="fill-sage-700 group-hover:fill-sage-600 transition-colors"
                    />
                    {/* Text */}
                    <text 
                      x="128" 
                      y="112" 
                      textAnchor="middle"
                      fontSize="56" 
                      fontWeight="700"
                      fontFamily="Inter, Pretendard, Arial, Helvetica, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
                      className="fill-sage-200 group-hover:fill-white transition-colors"
                      dominantBaseline="central" 
                      alignmentBaseline="central" 
                      dy=".18em"
                    >
                      blog
                    </text>
                  </g>
                </svg>
              </a>
            </div>
            
            {/* Copyright and Contact Info */}
            <div className="text-center space-y-2">
              <p className="text-sage-300 text-sm">
                © 2024 비비의정원. All rights reserved.
              </p>
              <div className="text-xs text-sage-400 space-y-1">
                <div>DM 문의: @vivi_atelier_</div>
                <div>사업자등록번호: 120-87-61559</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
