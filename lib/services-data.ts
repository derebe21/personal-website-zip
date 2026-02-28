import {
    LucideIcon,
    Server,
    Shield,
    Code,
    Cpu,
    Cloud,
    Zap,
    Lightbulb,
    ShieldCheck,
    MessageSquare,
} from 'lucide-react';

export interface Service {
    slug: string;
    icon: LucideIcon;
    logoImage: string;
    sidebarImage: string;
    bannerImage: string;
    bgColor: string;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
}

export const servicesData: Service[] = [
    {
        slug: 'digital-infrastructure',
        icon: Server,
        logoImage: '',
        sidebarImage: '',
        bannerImage: '/images/digital-infrastructure-final.png',
        bgColor: '#2E3A59',
        title: 'Digital Infrastructure',
        description: 'Robust and scalable foundational network and ICT design to support enterprise growth and security.',
        longDescription: 'We design and manage resilient digital foundations that ensure performance, scalability, and enterprise-grade security.',
        features: [
            'Network Infrastructure: Advanced enterprise networking solutions for secure and high-speed connectivity.',
            'Security Architecture: Multi-layered protection systems integrated into infrastructure to safeguard assets and maintain operational reliability.',
            'Scalable ICT Design: Future-ready IT infrastructure designed to support business growth and evolving technology requirements.',
            'Managed Operations: 24/7 monitoring, optimization, and operational support to maximize uptime and efficiency.'
        ],
        benefits: [],
    },
    {
        slug: 'data-center-solutions',
        icon: Server,
        logoImage: '',
        sidebarImage: '',
        bannerImage: '/images/data-center-final.png',
        bgColor: '#1E293B',
        title: 'Data Center Solutions',
        description: 'Comprehensive data center design, power, cooling, and management for maximum uptime and efficiency.',
        longDescription: 'High-availability data center environments engineered for efficiency, reliability, and sustainability.',
        features: [
            'Facilities Management: Comprehensive oversight of all data center facilities and operations.',
            'IT Systems & Integration: Seamless integration of enterprise IT systems to ensure performance and compatibility.',
            'Power & Cooling Solutions: Energy-efficient electrical and thermal systems designed for optimal data center operation.',
            'Monitoring & HA Operations: Real-time monitoring and high-availability management to ensure uninterrupted operations.'
        ],
        benefits: [],
    },
    {
        slug: 'integrated-security',
        icon: Shield,
        logoImage: '',
        sidebarImage: '',
        bannerImage: '/images/custom-cctv.jpg',
        bgColor: '#22C55E',
        title: 'Integrated Security Systems',
        description: 'Multi-layered cybersecurity and physical security solutions protecting digital assets and facilities.',
        longDescription: 'Integrated physical and IT security frameworks for complete enterprise protection.',
        features: [
            'CCTV & Surveillance: Intelligent monitoring systems with video analytics to protect assets and personnel.',
            'Access Control Systems: Secure identity and access management across facilities and IT systems.',
            'Integrated IT Security Monitoring: Continuous monitoring and alerts for IT system integrity and operational security.',
            'Threat Monitoring & Compliance: Proactive detection of risks and alignment with regulatory requirements.'
        ],
        benefits: [],
    },
    {
        slug: 'enterprise-platforms',
        icon: Code,
        logoImage: '/images/enterprise-apps-final.png',
        sidebarImage: '',
        bannerImage: '/images/custom-enterprise-v2.jpg',
        bgColor: '#3B82F6',
        title: 'Enterprise Platforms & Applications',
        description: 'Business-critical ERP, collaboration, databases, and platforms designed for operational excellence.',
        longDescription: 'Mission-critical enterprise systems designed to optimize business operations and collaboration.',
        features: [
            'Enterprise Resource Planning (ERP): Integrated platforms to streamline business processes and data management.',
            'Collaboration & Communication: Secure communication and collaboration tools for teams and departments.',
            'Enterprise Databases: High-performance database solutions for structured data management.',
            'Business-Critical Platforms: Reliable applications ensuring operational continuity and efficiency.'
        ],
        benefits: [],
    },
    {
        slug: 'technology-advisory',
        icon: Lightbulb,
        logoImage: '/images/technology-advisory-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/technology-advisory-final.jpg',
        bgColor: '#8B5CF6',
        title: 'Technology Advisory & Integration',
        description: 'Strategic consulting for digital transformation, IT roadmap, and technology optimization.',
        longDescription: 'Strategic consulting and implementation to drive digital transformation and IT optimization.',
        features: [
            'Digital Transformation: Modernization of legacy systems and processes into digital ecosystems.',
            'Strategy Consulting: Aligning business goals with technology solutions for long-term growth.',
            'System Optimization: Enhancing IT performance, efficiency, and operational effectiveness.',
            'IT Roadmap Development: Structured planning for future technology investments and upgrades.',
            'ROI Analysis: Evaluation of technology investment performance and business value.'
        ],
        benefits: [],
    },
    {
        slug: 'cloud-virtualization',
        icon: Cloud,
        logoImage: '/images/cloud-virtualization-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/custom-cloud.jpg',
        bgColor: '#38BDF8',
        title: 'Cloud & Virtualization Services',
        description: 'Flexible cloud deployments and virtualization to enhance scalability, backup, and continuity.',
        longDescription: 'Scalable and secure cloud and virtualized environments for enterprise growth.',
        features: [
            'Public, Private & Hybrid Cloud: Flexible deployment options tailored to organizational needs.',
            'Server & Desktop Virtualization: Virtual environments for optimized computing resources and flexibility.',
            'Backup & Disaster Recovery: Robust data protection and recovery systems to ensure business continuity.',
            'Business Continuity Solutions: Infrastructure and planning to maintain operations during disruptions.'
        ],
        benefits: [],
    },
    {
        slug: 'smart-systems',
        icon: Cpu,
        logoImage: '/images/smart-systems-final.png',
        sidebarImage: '',
        bannerImage: '/images/smart-systems-final.png',
        bgColor: '#FACC15',
        title: 'Smart Systems & Automation',
        description: 'IoT-enabled building automation, energy management, intelligent security, and network optimization.',
        longDescription: 'IoT-enabled intelligent systems for automation, monitoring, and efficiency.',
        features: [
            'Building Automation: Centralized control systems integrating HVAC, lighting, and facility management.',
            'Smart Lighting: Energy-efficient automated lighting tailored for operational excellence.',
            'Energy Management: Real-time monitoring and optimization of power consumption.',
            'Intelligent Security: AI-driven surveillance and alert systems for enhanced protection.',
            'Network Optimization: Performance tuning to maintain secure, reliable connectivity across systems.'
        ],
        benefits: [],
    },
    {
        slug: 'engineering-critical',
        icon: Zap,
        logoImage: '/images/critical-systems-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/engineering-electrical-final.jpg',
        bgColor: '#1C1C1C',
        title: 'Engineering & Critical Systems',
        description: 'Engineering solutions including facility design, power optimization, cooling, and environmental controls.',
        longDescription: 'Mission-critical power and infrastructure solutions for operational reliability.',
        features: [
            'Power Optimization: Efficient electrical systems designed for stable and reliable power delivery.',
            'Redundancy Planning: Fail-safe architecture with backup systems to minimize downtime.',
            'Cooling Systems: Advanced HVAC and thermal management for sensitive equipment.',
            'Environmental Controls: Precision monitoring of temperature, humidity, and airflow for operational safety.',
            'Facility Engineering Support: Expert installation, configuration, and integration of critical systems.',
            'Monitoring & Performance Enhancement: Continuous oversight and optimization of infrastructure performance.'
        ],
        benefits: [],
    },
    {
        slug: 'cybersecurity',
        icon: ShieldCheck,
        logoImage: '/images/cyber-risk-logo-new.png',
        sidebarImage: '',
        bannerImage: '/images/custom-cybersecurity.png',
        bgColor: '#0F172A',
        title: 'Cybersecurity',
        description: 'Comprehensive digital security solutions to protect enterprise systems, networks, and data.',
        longDescription: 'Comprehensive digital security solutions to protect enterprise systems, networks, and data.',
        features: [
            'Network Security: Firewalls, intrusion detection, and prevention systems to safeguard enterprise networks.',
            'Endpoint Protection: Security solutions for desktops, laptops, servers, and mobile devices.',
            'Threat Detection & Response: Real-time monitoring, analysis, and rapid response to cyber threats.',
            'Security Policy Compliance: Assessment and enforcement of IT security policies and regulatory standards.'
        ],
        benefits: [],
    },
    {
        slug: 'unified-communications',
        icon: MessageSquare,
        logoImage: '/images/unified-communications-new.png',
        sidebarImage: '',
        bannerImage: '/images/unified-communications-new.png',
        bgColor: '#1E293B',
        title: 'Unified Communications',
        description: 'Integrated communication solutions combining voice, video, messaging, and collaboration platforms.',
        longDescription: 'Integrated communication solutions to connect people and systems securely and efficiently.',
        features: [
            'Voice, Video & Messaging Platforms: Seamless enterprise-grade communication tools for collaboration.',
            'Collaboration Tools: Secure platforms for team interaction, project management, and document sharing.',
            'Scalable Communication Networks: Reliable and expandable networks supporting voice, video, and data traffic.',
            'Integration with IT Infrastructure: Seamless connection of communication systems with existing enterprise IT environments.'
        ],
        benefits: [],
    },
];
