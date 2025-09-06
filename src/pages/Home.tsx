import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Award,
      title: '전문성',
      description: '10년 이상의 경험을 바탕으로 최고 품질의 서비스를 제공합니다.',
    },
    {
      icon: Users,
      title: '고객 중심',
      description: '고객의 요구사항을 최우선으로 하여 맞춤형 솔루션을 제공합니다.',
    },
    {
      icon: Clock,
      title: '신속한 대응',
      description: '빠르고 정확한 서비스로 고객의 시간을 소중히 여깁니다.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sage-500 to-sage-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              비비의정원과 함께
              <br />
              <span className="text-white/80">새로운 경험을</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
              고객의 만족을 최우선으로 하는 전문 서비스 기업입니다.
              혁신적인 솔루션과 최고의 품질로 여러분을 만족시켜드리겠습니다.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-white text-sage-600 hover:bg-gray-100">
                <Link to="/services">
                  서비스 보기
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sage-600">
                <Link to="/contact">
                  문의하기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            왜 비비의정원을 선택해야 할까요?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            저희의 핵심 가치와 강점을 소개합니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-500">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              지금 바로 시작하세요
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              전문적인 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/reservation">
                  예약하기
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  더 알아보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
