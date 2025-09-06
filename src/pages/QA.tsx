import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Phone } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function QA() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: '비비의정원의 주요 서비스는 무엇인가요?',
      answer: '비비의정원은 디지털 솔루션, 컨설팅 서비스, 시스템 관리, 데이터 분석, 보안 서비스, 기술 지원 등 다양한 전문 서비스를 제공합니다. 각 서비스는 고객의 비즈니스 요구사항에 맞게 맞춤형으로 제공됩니다.',
      category: '서비스',
    },
    {
      id: 2,
      question: '프로젝트 진행 기간은 얼마나 걸리나요?',
      answer: '프로젝트의 규모와 복잡성에 따라 다르지만, 일반적으로 소규모 프로젝트는 1-2개월, 중규모는 3-6개월, 대규모 프로젝트는 6개월 이상 소요됩니다. 정확한 일정은 상담을 통해 안내해드립니다.',
      category: '프로젝트',
    },
    {
      id: 3,
      question: '비용은 어떻게 산정되나요?',
      answer: '프로젝트의 범위, 기간, 필요한 전문 인력 등을 종합적으로 고려하여 견적을 산정합니다. 투명한 가격 정책을 통해 합리적인 비용을 제시하며, 단계별 결제도 가능합니다.',
      category: '요금',
    },
    {
      id: 4,
      question: '사후 지원은 어떻게 이루어지나요?',
      answer: '프로젝트 완료 후에도 지속적인 기술 지원과 유지보수 서비스를 제공합니다. 24/7 모니터링, 정기적인 업데이트, 그리고 필요시 현장 지원까지 포괄적인 사후 서비스를 제공합니다.',
      category: '지원',
    },
    {
      id: 5,
      question: '상담 예약은 어떻게 하나요?',
      answer: '홈페이지의 예약 페이지를 통해 온라인으로 예약하실 수 있습니다. 또는 전화(02-123-4567)나 이메일(info@svon.co.kr)로 직접 연락주시면 상담 일정을 조율해드립니다.',
      category: '상담',
    },
    {
      id: 6,
      question: '원격 지원이 가능한가요?',
      answer: '네, 원격 지원이 가능합니다. 보안이 검증된 원격 접속 도구를 사용하여 실시간으로 문제를 해결해드리며, 필요시 화면 공유를 통한 교육도 제공합니다.',
      category: '지원',
    },
    {
      id: 7,
      question: '계약 해지는 어떻게 하나요?',
      answer: '계약서에 명시된 해지 조건에 따라 진행됩니다. 일반적으로 30일 전 서면 통지를 통해 해지가 가능하며, 진행 중인 프로젝트에 대해서는 별도 협의가 필요합니다.',
      category: '계약',
    },
    {
      id: 8,
      question: '보안은 어떻게 보장되나요?',
      answer: '고객 데이터 보호를 위해 ISO 27001 인증 기준에 따른 보안 체계를 운영하고 있습니다. 데이터 암호화, 접근 권한 관리, 정기적인 보안 감사 등을 통해 철저한 보안을 유지합니다.',
      category: '보안',
    },
  ];

  const categories = ['전체', '서비스', '프로젝트', '요금', '지원', '상담', '계약', '보안'];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQ = selectedCategory === '전체'
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              자주 묻는 질문
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              비비의정원에 대해 궁금한 점들을 모았습니다. 원하는 답변을 찾지 못하셨다면 언제든지 문의해주세요.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <Phone className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>전화 상담</CardTitle>
              <CardDescription>즉시 상담이 필요하신가요?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">02-123-4567</p>
              <p className="text-sm text-gray-600 mt-2">평일 09:00 - 18:00</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>온라인 문의</CardTitle>
              <CardDescription>이메일로 상세한 문의를 보내주세요</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/contact">문의하기</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                <HelpCircle className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>상담 예약</CardTitle>
              <CardDescription>전문가와 1:1 상담을 받아보세요</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/reservation">예약하기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQ.map((item) => (
            <Card key={item.id} className="border">
              <CardHeader
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium text-left">
                    {item.question}
                  </CardTitle>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </CardHeader>
              {openItems.includes(item.id) && (
                <CardContent className="border-t bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">해당 카테고리에 질문이 없습니다.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              원하는 답변을 찾지 못하셨나요?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              전문 상담사가 친절하게 답변해드립니다.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/contact">
                  문의하기
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/reservation">
                  상담 예약
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
