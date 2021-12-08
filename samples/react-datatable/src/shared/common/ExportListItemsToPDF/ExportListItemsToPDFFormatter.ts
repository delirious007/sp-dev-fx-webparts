export function pdfCellFormatter(value: any, type: string) {
  if (!value) {
    return value;
  }
  switch (type) {
    case 'SP.FieldUrl':
      let { children: text, href: link } = value.props;
      value = { text, link, color: 'blue' };
      break;
    case 'SP.FieldUser':
      value = value.props ? value.props.displayName : "";
      break;
    case 'SP.FieldMultiLineText':
      value = value.props ? value.props.dangerouslySetInnerHTML.__html : "";
      break;
    default:
      break;
  }
  return value;
}

