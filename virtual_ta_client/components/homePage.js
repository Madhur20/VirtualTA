import Image from 'next/image';

export default function HomePage() {
    return (
      <div id="img">
        <Image
        src="/utdallas-img.jpeg"
        layout='fill'
        width="500"
        height="500"
        >
          
        </Image>
        
      </div>
    )
  }

