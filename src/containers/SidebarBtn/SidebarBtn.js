import './SidebarBtn.scss';

const SidebarBtn = ({icon}) => {
  return (
    <button className="sidebar-btn">
      <div className="btn-icon">
        {icon}
      </div>
    </button>
  )
}

export default SidebarBtn;