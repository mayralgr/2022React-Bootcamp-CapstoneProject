import PropTypes from 'prop-types';
import SidebarWrapper from '../../styles/SidebarWrapper.styled';
import SidebarCategory from './SidebarCategory/SidebarCategory';

const Sidebar = ({ categories, activeCategoryFilters, handleCategoryClick }) => {
    return (
        <SidebarWrapper>
            {categories?.results.map((category) => (
                <SidebarCategory
                    active={activeCategoryFilters.includes(category.id)}
                    key={category.id}
                    handleCategoryClick={handleCategoryClick}
                    category={category}
                />
            ))}
        </SidebarWrapper>
    );
};

Sidebar.propTypes = {
    categories: PropTypes.object.isRequired,
};
export default Sidebar;
