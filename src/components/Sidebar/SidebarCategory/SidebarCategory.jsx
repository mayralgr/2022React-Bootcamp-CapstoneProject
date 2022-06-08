import PropTypes from 'prop-types';
import SidebarLink from '../../../styles/SidebarLink.styled';
const SidebarCategory = ({ handleCategoryClick, category, active }) => {
    return (
        <SidebarLink
            style={
                active
                    ? { backgroundColor: '#bb7c54' }
                    : { backgroundColor: '#fc9c9c' }
            }
            id={category.id}
            key={category.id + 'inner'}
            onClick={handleCategoryClick}>
            {category?.data.name}
        </SidebarLink>
    );
};

SidebarCategory.propTypes = {
    category: PropTypes.object.isRequired,
};

export default SidebarCategory;
