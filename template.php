<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var array $actualItem
 * @var array $minOffer
 * @var array $itemIds
 * @var array $price
 * @var array $measureRatio
 * @var bool $haveOffers
 * @var bool $showSubscribe
 * @var array $morePhoto
 * @var bool $showSlider
 * @var bool $itemHasDetailUrl
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var CatalogSectionComponent $component
 */


$newPrice = $price['RATIO_PRICE'];
$oldPrice = $price['RATIO_BASE_PRICE'];
?>


        <a class="product-card__link" href="<?= $item['DETAIL_PAGE_URL'] ?>">

                <div class="product-card__img-wrap">
                    <?
                    $PHOTO = $item["DETAIL_PICTURE"];
                    $renderImage = CFile::ResizeImageGet(
                        $PHOTO,
                        array("width" => 425, "height" => 605),
                        $resizeType = BX_RESIZE_IMAGE_EXACT,
                        $bInitSizes = false
                    );
                    ?>
                    <img 
                        class="product-card__img" 
                        src="<?= $renderImage["src"] ?>" 
                        alt="<?= $productTitle ?>"
                    >
                </div>
                <div class="content-block__text-wrapper">
                <div class="product-card__text-wrap">
                    <div class="product-card__name"><?= $productTitle ?></div>
                    <div class="product-card__price-wrap">

                    <?
                        if (!empty($price)) {
                            if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers) {
                                echo Loc::getMessage(
                                    'CT_BCI_TPL_MESS_PRICE_SIMPLE_MODE',
                                    array(
                                        '#PRICE#' => $price['PRINT_RATIO_PRICE'],
                                        '#VALUE#' => $measureRatio,
                                        '#UNIT#' => $minOffer['ITEM_MEASURE']['TITLE']
                                    )
                                );
                            } else {?>
                                <div class="product-card__actual-price"><?= $price['PRINT_RATIO_PRICE']?></div>
                            <?
                            }
                        }
                        if ($arParams['SHOW_OLD_PRICE'] === 'Y')
                        {?>
                            <div class="product-card__old-price" <?=($price['RATIO_PRICE'] >= $price['RATIO_BASE_PRICE'] ? 'style="display: none;"' : '')?>>
                                <?= $price['PRINT_RATIO_BASE_PRICE']?>
                            </div><?
                        }?>
                    </div>
                    <?
                    $newPrice = $price['RATIO_PRICE'];
                    $oldPrice = $price['RATIO_BASE_PRICE'];
                    if ($newPrice < $oldPrice):
                        $discontPersent = round((($oldPrice - $newPrice) / $oldPrice) * 100, 0);
                        ?>
                        <div class="product-card__discount">-<?= $discontPersent ?>%</div>
                    <? endIf; ?>
                </div>
                </div>

        </a>
        <div class="product-card__like">
        #FAVORITE_<?= $item['ID']?>#
        </div>

<?