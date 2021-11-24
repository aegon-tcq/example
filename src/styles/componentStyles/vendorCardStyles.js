import colors from '../../constants/colors';
import globalStyles from '../globalStyles';

export default vendorCardStyles = {
  vendorCardView:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  imageIconStyle:{
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  vendorNameText: {
    ...globalStyles.textStyle18,
    color: colors.black,
    fontWeight: '500',
  },
  vendorLocationText: {
    ...globalStyles.textStyle12,
    color: colors.arsenic,
  },
};
