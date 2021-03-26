import SectionTop from '../SectionTop';
import SectionCenter from '../SectionCenter';
import SectionBottom from '../SectionBottom';

import './MainSection.scss';

const MainSection = () => {
  return (
    <div className="main-section">
      <SectionTop/>
      <SectionCenter/>
      <SectionBottom/>
    </div>
  )
}

export default MainSection;