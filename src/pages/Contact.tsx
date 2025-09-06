import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  Car,
  Train
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const subjects = [
    '일반 문의',
    '서비스 문의',
    '견적 요청',
    '기술 지원',
    '파트너십',
    '기타',
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요.';
    if (!formData.email.trim()) newErrors.email = '이메일을 입력해주세요.';
    if (!formData.phone.trim()) newErrors.phone = '연락처를 입력해주세요.';
    if (!formData.subject) newErrors.subject = '문의 유형을 선택해주세요.';
    if (!formData.message.trim()) newErrors.message = '문의 내용을 입력해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              연락처
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              궁금한 점이 있으시거나 상담이 필요하시면 언제든지 연락해주세요.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  문의하기
                </CardTitle>
                <CardDescription>
                  아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        이름 *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="이름을 입력해주세요"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        이메일 *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="이메일을 입력해주세요"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        연락처 *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="연락처를 입력해주세요"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        회사명
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="회사명을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      문의 유형 *
                    </label>
                    <Select onValueChange={(value: string) => handleInputChange('subject', value)}>
                      <SelectTrigger className={errors.subject ? 'border-red-500' : ''}>
                        <SelectValue placeholder="문의 유형을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      문의 내용 *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="문의 내용을 자세히 적어주세요"
                      rows={6}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    문의 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  회사 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">주소</p>
                    <p className="text-sm text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      비비의정원 빌딩 10층
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">전화</p>
                    <p className="text-sm text-gray-600">
                      대표번호: 02-123-4567<br />
                      팩스: 02-123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">이메일</p>
                    <p className="text-sm text-gray-600">
                      일반 문의: info@svon.co.kr<br />
                      기술 지원: support@svon.co.kr<br />
                      영업 문의: sales@svon.co.kr
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">운영 시간</p>
                    <p className="text-sm text-gray-600">
                      월~금: 09:00 - 18:00<br />
                      토요일: 09:00 - 15:00<br />
                      일요일/공휴일: 휴무
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Guide */}
            <Card>
              <CardHeader>
                <CardTitle>오시는 길</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Train className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">지하철</p>
                    <p className="text-sm text-gray-600">
                      2호선 강남역 3번 출구에서 도보 5분<br />
                      분당선 선릉역 1번 출구에서 도보 7분
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Car className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">주차</p>
                    <p className="text-sm text-gray-600">
                      건물 지하 주차장 이용 가능<br />
                      (방문 고객 2시간 무료)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>위치 안내</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">지도</p>
                    <p className="text-sm text-gray-500">
                      서울특별시 강남구 테헤란로 123
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-blue-900 mb-2">
                    긴급 문의
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    급한 문의사항이 있으시면 전화로 연락해주세요.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    02-123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
