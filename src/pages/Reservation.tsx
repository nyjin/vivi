import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    '디지털 솔루션',
    '컨설팅 서비스',
    '시스템 관리',
    '데이터 분석',
    '보안 서비스',
    '기술 지원',
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
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
    if (!formData.service) newErrors.service = '서비스를 선택해주세요.';
    if (!formData.date) newErrors.date = '날짜를 선택해주세요.';
    if (!formData.time) newErrors.time = '시간을 선택해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('예약이 성공적으로 신청되었습니다. 담당자가 확인 후 연락드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              상담 예약
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              전문 컨설턴트와의 1:1 상담을 통해 최적의 솔루션을 제안받으세요.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Reservation Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  예약 신청
                </CardTitle>
                <CardDescription>
                  아래 양식을 작성해주시면 담당자가 확인 후 연락드리겠습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">개인 정보</h3>

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

                  {/* Service Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">상담 정보</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        상담 서비스 *
                      </label>
                      <Select onValueChange={(value: string) => handleInputChange('service', value)}>
                        <SelectTrigger className={errors.service ? 'border-red-500' : ''}>
                          <SelectValue placeholder="상담받고 싶은 서비스를 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          희망 날짜 *
                        </label>
                        <Input
                          type="date"
                          min={today}
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className={errors.date ? 'border-red-500' : ''}
                        />
                        {errors.date && (
                          <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          희망 시간 *
                        </label>
                        <Select onValueChange={(value: string) => handleInputChange('time', value)}>
                          <SelectTrigger className={errors.time ? 'border-red-500' : ''}>
                            <SelectValue placeholder="시간 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.time && (
                          <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        상담 내용
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="상담받고 싶은 내용을 자세히 적어주세요"
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    예약 신청하기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  연락처 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">전화</p>
                    <p className="text-sm text-gray-600">02-123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">이메일</p>
                    <p className="text-sm text-gray-600">info@svon.co.kr</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">상담 시간</p>
                    <p className="text-sm text-gray-600">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultation Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  상담 진행 과정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-sm font-medium text-white">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium">예약 신청</h3>
                      <p className="text-sm text-gray-600">온라인 양식 작성</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-sm font-medium text-white">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium">일정 확인</h3>
                      <p className="text-sm text-gray-600">담당자 확인 연락</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-sm font-medium text-white">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium">상담 진행</h3>
                      <p className="text-sm text-gray-600">전문가 1:1 상담</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-sm font-medium text-white">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium">제안서 제공</h3>
                      <p className="text-sm text-gray-600">맞춤형 솔루션 제안</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notice */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex">
                  <User className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-blue-900">
                      상담 안내
                    </h3>
                    <p className="text-sm text-blue-700 mt-1">
                      상담은 약 30분~1시간 정도 소요되며, 필요시 추가 미팅을 진행할 수 있습니다.
                      상담료는 무료이며, 구체적인 제안서 작성시에만 별도 비용이 발생합니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
